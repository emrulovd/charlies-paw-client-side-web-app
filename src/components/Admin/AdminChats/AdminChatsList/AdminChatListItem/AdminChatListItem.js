import React from 'react';

import Button from '../../../../UI/Button/Button';

const adminChatListItem = (props) => {

    const getJoinChat = () => {
        props.history.replace(`/admin/chats/message?id=${props.userID}&dog=${props.title}`);
    }
    return(
        <div>
            {props.title}
            <Button click={getJoinChat}>Join</Button>
        </div>
    )
}


export default adminChatListItem;