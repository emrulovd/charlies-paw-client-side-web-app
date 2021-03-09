import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () =>{
    return{
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};


export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password
        }
        axios.post('http://localhost:8080/auth/signup', authData)
            .then(response => {
                console.log(response.message);
                console.log(response.data);
                dispatch(authSuccess());
            })
            .catch(error => {
                console.log(error);
                dispatch(authFail(error))
            })
    }
}
