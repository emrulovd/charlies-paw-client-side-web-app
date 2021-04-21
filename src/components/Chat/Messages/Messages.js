import React from 'react'; 
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';
import classes from './Messages.module.css';

const messages = ({messages, name}) => {
    return(
        <ScrollToBottom className={classes.Messages}>
            {
                messages.map((message, index) => {
                    return(
                        <div key={index}>
                            <Message message = {message} name = {name}/>
                        </div>
                    )
                })
            }
        </ScrollToBottom>
    )
}

export default messages;