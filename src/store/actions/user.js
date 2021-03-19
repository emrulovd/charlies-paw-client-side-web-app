import axios from 'axios';
import * as actionTypes from './actionTypes';


export const userStart = () => {
    return{
        type: actionTypes.USER_START
    };
};

export const userGetFavouritesSuccess = (favList) => {
    return{
        type: actionTypes.USER_SUCCESS,
        favList: favList
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