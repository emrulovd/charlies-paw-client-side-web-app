import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

class Favourites extends Component {

    componentDidMount() {
        const userID = localStorage.getItem('userID');
        this.props.onGetFavouriteList(userID);
    }

    render(){
        return(
            <div>Favourites</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userID: state.auth.userId
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onGetFavouriteList: (userID) => dispatch(actions.getFavourites(userID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
