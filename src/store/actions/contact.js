import axios from 'axios';
import * as actionTypes from './actionTypes';


export const contactStart = () => {
    return{
        type: actionTypes.CONTACT_START
    };
};

export const contactSuccess = (messageSuccess) => {
    return{
        type: actionTypes.CONTACT_SUCCESS,
        message: messageSuccess
    }
}

export const contactFail = (error) => {
    return {
        type: actionTypes.CONTACT_FAIL,
        error: error
    }
}

export const contact = (name, email, title, message) => {
    return dispatch => {
        dispatch(contactStart());
        const contactForm  = {
            name: name,
            email: email,
            title: title,
            message: message
        }
        axios.post('http://localhost:8080/contact', contactForm)
            .then(response => {
                dispatch(contactSuccess(response.data.message));
            })
            .catch( error => {
                dispatch(contactFail(error.response))
            });
    }
}