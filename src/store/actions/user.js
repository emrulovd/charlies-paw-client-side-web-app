import axios from 'axios';
import * as actionTypes from './actionTypes';


export const userStart = () => {
    return{
        type: actionTypes.USER_START
    };
};

export const userGetData = (userData) => {
    return{
        type: actionTypes.USER_DATA_SUCCESS,
        userData: userData
    }
}

export const userGetFavouritesSuccess = (favList) => {
    return{
        type: actionTypes.USER_SUCCESS,
        favList: favList
    }
}

export const userGetChatsSuccess = (user_chats) => {
    return{
        type: actionTypes.USER_SUCCESS_CHATS,
        chats: user_chats
    }
}

export const userGetCountSuccess = (user_number) => {
    return{
        type: actionTypes.USER_COUNT_SUCCESS,
        user_count: user_number
    }
}

export const userSuccess = (message) => {
    return{
        type: actionTypes.USER_SUCCESS,
        message: message
    }
}

export const userFail = (error) => {
    return{
        type: actionTypes.USER_FAIL,
        Error: error
    }
}

export const getUserData = (userID) => {
    return dispatch => {
        dispatch(userStart());
        axios.get('http://localhost:8080/user/' + userID)
            .then(response => {
                dispatch(userGetData(response.data.user_data));
            }).catch(error => {
                dispatch(userFail(error.response));
            })
    }
}

export const addFavourites = (favouritesForm) => {
    return dispatch => {
        dispatch(userStart());
        axios.post('http://localhost:8080/user/favourites', favouritesForm)
            .then(response => {
                dispatch(userSuccess(response.data.message));
            })
            .catch(error =>{
                dispatch(userFail(error.response));
            })
    }
}

export const getFavourites = (userID) => {
    return dispatch => {
        dispatch(userStart());
        axios.get('http://localhost:8080/user/favourites/' + userID)
            .then(response => {
                console.log(response.data.favList);
                dispatch(userGetFavouritesSuccess(response.data.favList));
            })
            .catch(error => {
                dispatch(userFail(error.response));
            })
    }
}

export const getChats = (userID) => {
    return dispatch => {
        dispatch(userStart());
        axios.get('http://localhost:8080/user/chats/' + userID)
            .then(response => {
                dispatch(userGetChatsSuccess(response.data.chats));
            }).catch(error => {
                dispatch(userFail(error.response));
            })
    }
}


export const getUserCount = () => {
    return dispatch => {
        dispatch(userStart());
        axios.get('http://localhost:8080/user/count')
            .then(response => {
                dispatch(userGetCountSuccess(response.data.user_number));
            }).catch(error => {
                dispatch(userFail(error.response));
            })
    }
}