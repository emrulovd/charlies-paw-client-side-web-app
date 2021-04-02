import React from 'react';

import AdminChatList from './AdminChatsList/AdminChatsList';

const adminChats = (props) => {
    return(
        <AdminChatList chats = {props.chats}  history={props.history} userID = {props.userID}/>
    )
}


export default adminChats;