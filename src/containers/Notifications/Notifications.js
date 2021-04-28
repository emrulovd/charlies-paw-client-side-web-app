import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import NotificationsList from '../../components/Notifications/NotificationsList';
import classes from './Notifications.module.css';
// import notificationsList from '../../components/Notifications/NotificationsList';

class Notifications extends Component {

    componentDidMount() {
        this.props.onGetNorifications();
    }

    render(){
        return(
            <div className={classes.NorificationsContainer}>
                <h3>Notifications</h3>
                <hr></hr>
                <NotificationsList notifications = {this.props.notifications}/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
        notifications: state.dg.dogs_notifications
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onGetNorifications: () => dispatch(actions.getDogsNotifications())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications); 