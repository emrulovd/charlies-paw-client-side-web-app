import React from 'react';

import ReactEmoji from 'react-emoji';
import classes from './Message.module.css';

const message = ({message: {user, text}, name}) => {
    let isSendByCurrentUser = false;
    
    if(user === name){
        isSendByCurrentUser = true;
    }

    return(
        <div>
            {
                isSendByCurrentUser ? (
                    <div className = {[classes.messageContainer, classes.justifyEnd].join(' ')}>
                        <p className = {[classes.sendText, classes.pr].join(' ')}>{name}</p>
                        <div className = {[classes.messageBox, classes.backgroundBlue].join(' ')}>
                            <p className={[classes.messageText, classes.colorWhite].join(' ')}>{ReactEmoji.emojify(text)}</p>
                        </div>
                    </div>
                )
                : (
                    <div className = {[classes.messageContainer, classes.justifyStart].join(' ')}>
                        <div className = {[classes.messageBox, classes.backgroundLight].join(' ')}>
                            <p className={[classes.messageText, classes.colorDark].join(' ')}>{ReactEmoji.emojify(text)}</p>
                        </div>
                        <p className = {[classes.sendText, classes.pl].join(' ')}>{user}</p>
                    </div>
                )
            }
        </div>
    )
}

export default message;