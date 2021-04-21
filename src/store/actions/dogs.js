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
    };
}

export const dogsCountSuccess = (number) => {
    return{
        type: actionTypes.DOGS_COUNT_SUCCESS,
        count: number 
    }
}

export const dogsSuccess = (message) => {
    return{
        type: actionTypes.DOGS_SUCCESS,
        message: message
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
                console.log(response.data.dogs);
                dispatch(dogsAddSuccess(response.data.dogs));
             })
             .catch(error => {
                dispatch(dogsFail(error.response));
            })
    }
}

export const createDog = (header, dogData) => {
    return dispatch => {
        dispatch(dogsStart());
        axios.post('http://localhost:8080/dogs/create', dogData, {
            headers: header
        }).then( response => {
            console.log(response);
            dispatch(dogsSuccess(response.data.message));
        }).catch(error => {
            dispatch(dogsFail(error.response));
        });
    }
}

export const deleteDog = (header, dog_id) => {
    return dispatch => {
        dispatch(dogsStart());
        axios.delete('http://localhost:8080/dogs/' + dog_id, {
            headers: header
        }).then(response => {
                dispatch(dogsSuccess(response.data.message));
        }).catch(error => {
            dispatch(dogsFail(error.response));
        })
    }
}

export const updateDog = (header, dog_id, dogUpdateForm) => {
    return dispatch => {
        dispatch(dogsStart());
        axios.put('http://localhost:8080/dogs/update/' + dog_id, dogUpdateForm, {
            headers: header
        }).then( response =>{
                dispatch(dogsSuccess(response.data.message));
        }).catch(error => {
            dispatch(dogsFail(error.response));
        })
    }
} 


export const getDogsNumber = () => {
    return dispatch => {
        dispatch(dogsStart());
        axios.get('http://localhost:8080/dogs/count')
            .then(response => {
                dispatch(dogsCountSuccess(response.data.dogs_number));
            }).catch(error => {
                dispatch(dogsFail(error.response));
            })
    }
}
