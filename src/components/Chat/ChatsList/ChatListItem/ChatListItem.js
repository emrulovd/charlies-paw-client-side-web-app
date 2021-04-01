import React from 'react';

import Button from '../../../UI/Button/Button';

const chatListItem = (props) => {
    const getChat = () => {
        props.history.replace(`/profile/messages/chat?id=${props.user_id}&dog=${props.chat_name}`);
    }
    return(
        <div>
            <h4>{props.chat_name}</h4>
            <Button click={getChat}>Join</Button>
        </div>
    )
}

export default chatListItem;