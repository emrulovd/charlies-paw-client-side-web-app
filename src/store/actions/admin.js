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

export const adminGetChatsSucess = (chats) => {
    return{
        type: actionTypes.ADMIN_CHATS_SUCCESS,
        chats: chats
    }
}

export const adminUpdateUserRoleSuccess = () => {
    return{
        type: actionTypes.ADMIN_UPDATE_SUCCESS,
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
            }).catch(error => {
                dispatch(adminFail(error.response));
            })
    }
}

export const adminUpdateUserRole = (role, user_id) => {
    return dispatch =>{
        dispatch(adminStart());
        const roleData = {
            role: role
        }
        axios.put('http://localhost:8080/user/role/' + user_id, roleData)
            .then(response =>{
                dispatch(adminSuccess(response.data.message));
                dispatch(adminGetUsers());
            }).catch(error => {
                dispatch(adminFail(error.response));
            })
    }
}

export const adminGetChats = () => {
    return dispatch =>{
        dispatch(adminStart());
        axios.get('http://localhost:8080/user/chats')
            .then(response => {
                dispatch(adminGetChatsSucess(response.data.chats));
            }).catch(error => {
                dispatch(adminFail(error.response));
            })
    }
}