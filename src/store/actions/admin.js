import axios from 'axios';
import * as actionTypes from './actionTypes';



export const adminStart = () => {
    return{
        type: actionTypes.ADMIN_START
    };
}

export const adminGetUsersSuccess = (users) => {
    return{
        type: actionTypes.ADMIN_USERS_SUCCESS,
        users: users
    }
}

export const adminSuccess = (message) => {
    return{
        type: actionTypes.ADMIN_SUCCESS,
        message: message
    }
}

export const adminFail = (error) => {
    return{
        type: actionTypes.ADMIN_FAIL,
        error: error
    }
}

export const adminGetUsers = () => {
    return dispatch => {
        dispatch(adminStart);
        axios.get('http://localhost:8080/user/')
            .then(response =>{
                dispatch(adminSuccess(response.data.message));
                dispatch(adminGetUsersSuccess(response.data.users));
            }).catch(err => {
                dispatch(adminFail(err.response));
            })
    }
}