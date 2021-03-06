import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const intialState = {
    dogs: [],
    user: [],
    chats: [],
    user_number: null,
    loading: false,
    error: null
}


const userStart = (state, action) => {
    return updateObject(state, {loading: true, error: null});
}

const userSuccessData = (state, action) => {
    return updateObject(state, {
        user: action.userData,
        loading: false 
    })
}

const userSuccessFavouritsList = (state, action) =>{
    return updateObject(state, {
        dogs: action.favList,
        loading: false
    });
}

const userGetCount = (state, action) => {
    return updateObject(state, {
        user_number: action.user_count,
        loading: false
    })
}

const userSuccessChatList = (state, action) => {
    return updateObject(state, {
        chats: action.chats,
        loading: false
    })
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
        case actionTypes.USER_DATA_SUCCESS:
            return userSuccessData(state, action);
        case actionTypes.USER_COUNT_SUCCESS:
            return userGetCount(state, action);
        case actionTypes.USER_SUCCESS_CHATS:
            return userSuccessChatList(state, action);
        case actionTypes.USER_FAIL:
            return userFail(state, action);
        default: 
            return state;
    }
}


export default reducer;