import axios from 'axios';
import * as actionTypes from './actionTypes';


export const userStart = () => {
    return{
        type: actionTypes.USER_START
    };
};

export const userAddToFavouritesSuccess = (message) => {
    return{
        type: actionTypes.USER_SUCCESS,
        message: message
    }
}

export const userAddToFavouritesFail = (error) => {
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
                console.log(response.data.message);
            })
            .catch(error =>{
                console.log(error.response);
            })
    }
}