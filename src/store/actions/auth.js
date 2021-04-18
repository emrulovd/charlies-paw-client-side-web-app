import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () =>{
    return{
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId, role, isCreated) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
        role: role,
        isCreated: isCreated
    };
};

export const authAccountUpdateSuccess = () => {
    return{
        type: actionTypes.AUTH_UPDATE_SUCCESS
    }
} 

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
    localStorage.removeItem('role');
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
                dispatch(authSuccess(response.data.token, response.data.userId, response.data.role, response.statusText));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(error => {
                dispatch(authFail(error.response));
            })
    }
}

export const googleAuth = (token, userId, role, isCreated, expirationTime) => {
    return dispatch => {
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);
        localStorage.setItem('userID', userId);
        localStorage.setItem('role', role);
        dispatch(authSuccess(token, userId, role, isCreated));
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
                const role = localStorage.getItem('role');
                if(role === 'user'){
                    dispatch(authSuccess(token, userID, role))
                }else{
                    axios.get('http://localhost:8080/user/role/' + userID)
                    .then(response => {
                        dispatch(authSuccess(token,userID,response.data.role));
                        dispatch(checkAuthTimeout((expirationTime.getTime() - new Date().getTime())/1000));
                    }).catch(error => {
                        dispatch(authFail(error.response));
                    })
                }     
            }
        }
    };
};


export const changePasword = (new_password, current_password, user_id) => {
    return dispatch => {
        dispatch(authStart());
        const passwordForm = {
            new_password: new_password,
            current_password: current_password
        }
        axios.put('http://localhost:8080/auth/change/password/' + user_id, passwordForm)
            .then( _ => {
                    dispatch(authAccountUpdateSuccess());
            }).catch(error => {
                dispatch(authFail(error.response));
            })
    }
}
