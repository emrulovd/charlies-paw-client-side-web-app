import axios from 'axios';
import * as actionTypes from './actionTypes';


export const dogsStart = () => {
    return{
        type: actionTypes.DOGS_START
    };
};

export const dogsAddSuccess = (dogs) => {
    return{
        type: actionTypes.DOGS_ADD,
        dogs: dogs
    }
}

export const dogsFail = (error) => {
    return{
        type: actionTypes.DOGS_FAIL,
        Error: error
    }
}

export const dogs = () => {
    return dispatch => {
        dispatch(dogsStart());
        axios.get('http://localhost:8080/dogs')
            .then(response => {
                dispatch(dogsAddSuccess(response.data.dogs));
             })
             .catch(error => {
                dispatch(dogsFail(error.response));
            })
    }
}