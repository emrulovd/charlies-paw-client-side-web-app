import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Container} from 'react-bootstrap';
import classes from './Favourites.module.css';
import DogsList from '../../../components/Dogs/DogsPanelControl/Dogs-list/Dogs-List';
import * as actions from '../../../store/actions/index';

import nothing from '../../../assets/nothing.png'

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
            <Container className={classes.Container} fluid>
                <h3 className={classes.Title}>List of Favourites</h3>
                <hr/>
                <div className={classes.List}>
                {  this.props.favDogs.length === 0 ? 
                    <div className={classes.NoList}>
                        <p> List of favourites empty</p>
                        <img className={classes.Nothing} src={nothing} alt=""/>
                    </div>
                    :    
                    listOfFavourites
                }
                </div>
            </Container>
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
