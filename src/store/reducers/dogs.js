import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const intialState = {
    dogs: [],
    loading: true,
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
        case actionTypes.DOGS_FAIL:
            return dogsFail(state, action);
        default:
            return state; 
    }   
}

export default reducer;