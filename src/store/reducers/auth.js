import * as actionTypes from '../actions/actionTypes';

const intialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
}

const reducer = (state = intialState, action) => {
    switch (action.type){
        case actionTypes.AUTH_START:
            
    }
}


export default reducer;