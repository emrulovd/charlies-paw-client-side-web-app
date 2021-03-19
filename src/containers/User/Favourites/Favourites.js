import React, { Component } from 'react';
import { connect } from 'react-redux';

import DogsList from '../../../components/Dogs/DogsPanelControl/Dogs-list/Dogs-List';
import * as actions from '../../../store/actions/index';

class Favourites extends Component {

    componentDidMount() {
        const userID = localStorage.getItem('userID');
        this.props.onGetFavouriteList(userID);
    }

    render(){
        let listOfFavourites = (
            <DogsList dogs={this.props.favDogs}/>
        )

        return(
            <div>
                <h1>Favourites</h1>
                {listOfFavourites}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userID: state.auth.userId,
        favDogs: state.user.dogs,
        loading: state.user.loading
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onGetFavouriteList: (userID) => dispatch(actions.getFavourites(userID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
