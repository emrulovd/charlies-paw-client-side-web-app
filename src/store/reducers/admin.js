import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const intialState = {
    users: [],
    loading: false,
    error: null 
}

const adminStart = (state, action) => {
    return updateObject(state, {error: null, loading: true});
}

const adminGetUsers = (state, action) => {
    return updateObject(state, {
        users: action.users,
        loading: false
    })
} 

const adminFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}


const reducer  = (state = intialState, action) => {
    switch(action.type){
        case actionTypes.ADMIN_START:
            return adminStart(state, action);
        case actionTypes.ADMIN_USERS_SUCCESS: 
            return adminGetUsers(state, action);
        case actionTypes.ADMIN_FAIL:
            return adminFail(state, action);
        default:
            return state; 
    }   
}


export default reducer; 