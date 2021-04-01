import React from 'react';

import ChatListItem from './ChatListItem/ChatListItem';
import { ListGroup } from 'react-bootstrap';

const chatsList = (props) => {
    return(
        <div>
            <ListGroup>
                {
                    props.chats.map((chat, index) => {
                        return(
                            <ListGroup.Item key={index}>
                                <ChatListItem chat_name = {chat.title} user_id = {chat.user_id} history={props.history}/>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}

export default chatsList;