import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const intilaState = {
    message: null,
    error: null,
    loading: false
}

const contactStart = (state, action) => {
    return updateObject(state, {message: null, error: null, loading: true});
}

const contactMade = (state, action) => {
    return updateObject(state, {message: action.message, loading: false});
}

const contactFail = (state, action) => {
    return updateObject(state, {error: action.error, loading: false});
}

const reducer = (state = intilaState, action) => {
    switch(action.type){
        case actionTypes.CONTACT_START: 
            return contactStart(state, action);
        case actionTypes.CONTACT_SUCCESS:
            return contactMade(state,action);
        case actionTypes.CONTACT_FAIL:
            return contactFail(state, action);
        default:
            return state;
    }
}

export default reducer;