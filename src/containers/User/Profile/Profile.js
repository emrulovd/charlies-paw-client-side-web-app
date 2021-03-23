import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import {Col} from 'react-bootstrap';
import classes from './Profile.module.css'

class Profile extends Component {

    componentDidMount() {
        const userID = localStorage.getItem('userID');
        this.props.getUserData(userID);
    }

    render(){
        return(
            <div>
                <Col className={classes.Info}>
                   <h4>User Info: </h4>
                   <p>Name: {this.props.user.name}</p>
                   <p>Address: {this.props.user.address}</p>
                   <p>Phone Number: {this.props.user.phone_number}</p>
                   <p>Email: {this.props.user.email}</p>
                </Col>    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.user.user,
        loading: state.user.loading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getUserData: (userID) => dispatch(actions.getUserData(userID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);