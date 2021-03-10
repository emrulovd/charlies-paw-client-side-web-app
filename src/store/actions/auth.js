import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () =>{
    return{
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};


export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password
        }
        let URL = 'http://localhost:8080/auth/signup';
        if(!isSignup){
            URL = 'http://localhost:8080/auth/login';
        } 
        axios.post(URL, authData)
            .then(response => {
                dispatch(authSuccess(response.data.token, response.data.userId));
            })
            .catch(error => {
                dispatch(authFail(error.response));
            })
    }
}
