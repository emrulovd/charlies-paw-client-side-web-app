import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const intialState = {
    dogs: [],
    loading: false,
    error: null
}


const userStart = (state, action) => {
    return updateObject(state, {loading: true, error: null});
}

const userSuccessFavouritsList = (state, action) =>{
    return updateObject(state, {
        dogs: action.favList,
        loading: false
    });
}

const userFail = (state, action) => {
    return updateObject(state, {error: action.Error, loading: false});
}


const reducer = (state = intialState, action) => {
    switch(action.type){
        case actionTypes.USER_START:
            return userStart(state, action);
        case actionTypes.USER_SUCCESS:
            return userSuccessFavouritsList(state, action);
        case actionTypes.USER_FAIL:
            return userFail(state, action);
        default: 
            return state;
    }
}


export default reducer;