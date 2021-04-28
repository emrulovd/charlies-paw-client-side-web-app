import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const intialState = {
    dogs: [],
    dogs_notifications: [],
    notification_status: false,
    loading: false,
    dogs_number: null,
    error: null 
}

const dogsStart = (state, action) => {
    return updateObject(state, {error: null, loading: true});
}

const addDogs = (state, action) => {
    return updateObject(state, {
        dogs: action.dogs,
        loading: false
    })
} 

const countDogs = (state, action) => {
    return updateObject(state, {
        dogs_number: action.count,
        loading: false
    })
}

const notificationStatus = (state, action) => {
    return updateObject(state, {
        notification_status: action.status
    })
}

const notificationsDogs = (state, action) => {
    return updateObject(state, {
        dogs_notifications: action.dogs_notifications,
        notification_status: false, 
        loading: false
    })
}

const dogsFail = (state, action) => {
    return updateObject(state, {
        error: action.Error,
        loading: false
    })
}

const reducer  = (state = intialState, action) => {
    switch(action.type){
        case actionTypes.DOGS_START:
            return dogsStart(state, action);
        case actionTypes.DOGS_ADD: 
            return addDogs(state, action);
        case actionTypes.DOGS_COUNT_SUCCESS:
            return countDogs(state, action);
        case actionTypes.DOGS_NOTIFICATIONS_STATUS:
            return notificationStatus(state, action);
        case actionTypes.DOGS_NOTIFICATIONS_SUCCESS:
            return notificationsDogs(state, action);
        case actionTypes.DOGS_FAIL:
            return dogsFail(state, action);
        default:
            return state; 
    }   
}

export default reducer;
