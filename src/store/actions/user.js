import axios from 'axios';
import * as actionTypes from './actionTypes';


export const userStart = () => {
    return{
        type: actionTypes.USER_START
    };
};

export const userGetFavouritesSuccess = (message) => {
    return{
        type: actionTypes.USER_SUCCESS,
        message: message
    }
}

export const userAddToFavouritesSuccess = (message) => {
    return{
        type: actionTypes.USER_SUCCESS,
        message: message
    }
}

export const userFavouritesFail = (error) => {
    return{
        type: actionTypes.USER_FAIL,
        error: error
    }
}

export const addFavourites = (favouritesForm) => {
    return dispatch => {
        dispatch(userStart());
        axios.post('http://localhost:8080/user/favourites', favouritesForm)
            .then(response => {
                console.log(response);
                console.log(response.data.message);
                dispatch(userAddToFavouritesSuccess(response.data.message));
            })
            .catch(error =>{
                console.log(error.response);
                dispatch(userFavouritesFail(error.response));
            })
    }
}

export const getFavourites = (userID) => {
    return dispatch => {
        dispatch(userStart());
        console.log(userID)
        axios.get('http://localhost:8080/user/favourites/' + userID)
            .then(response => {
                console.log(response);
                dispatch(userGetFavouritesSuccess(response.message));
            })
            .catch(error => {
                dispatch(userFavouritesFail(error.response));
            })
    }
}