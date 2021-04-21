import React from 'react';

import { ListGroup } from 'react-bootstrap';
import AdminChatListItem from './AdminChatListItem/AdminChatListItem';

const adminChatsList = (props) => {
    return(
        <div>
            <ListGroup variant="flush">
                {
                    props.chats.map((chat, index) => {
                        return(
                            <ListGroup.Item key={index}>
                                <AdminChatListItem 
                                title={chat.title}
                                history={props.history} 
                                userID = {props.userID}
                                chat_userID = {chat.user_id}/>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}

export default adminChatsList;