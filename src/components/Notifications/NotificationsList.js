import React from 'react';

import {ListGroup} from 'react-bootstrap';
import NotificationsListItem from './NotificationsListItem/NotificationsListItem';

const notificationsList = (props) => {

    return(
        <div>
            <ListGroup>
                { props.notifications.map((notification, index) => {
                    if(index >= 10){
                        return null; 
                    }else{
                       return(
                        <ListGroup.Item key={index}>
                            <NotificationsListItem image={notification.image} dogName = {notification.dogName}/>
                        </ListGroup.Item>
                       )
                    }
                })}
            </ListGroup>
        </div>
    )
}

export default notificationsList; 