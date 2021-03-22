import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () =>{
    return{
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId, isCreated) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
        isCreated: isCreated
    };
};

export const authFail = (error) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userID');
    return{
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    }
}

export const auth = (authData, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        let URL = 'http://localhost:8080/auth/signup';
        if(!isSignup){
            URL = 'http://localhost:8080/auth/login';
        } 
        axios.post(URL, authData)
            .then(response => {
                const expirationTime = new Date( new Date().getTime() + response.data.expiresIn * 1000 );
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('expirationTime', expirationTime);
                localStorage.setItem('userID', response.data.userId);
                dispatch(authSuccess(response.data.token, response.data.userId, response.statusText));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(error => {
                dispatch(authFail(error.response));
            })
    }
}


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(logout());
        }else{
            const expirationTime = new Date(localStorage.getItem('expirationTime'));
            if(expirationTime <= new Date()){
                dispatch(logout())
            }else{
                const userID = localStorage.getItem('userID');
                dispatch(authSuccess(token,userID));
                dispatch(checkAuthTimeout((expirationTime.getTime() - new Date().getTime())/1000));
            }
        }
    };
};
