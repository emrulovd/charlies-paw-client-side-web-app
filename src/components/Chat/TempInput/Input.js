import React from 'react';

import classes from './Input.module.css';

const input  = ({message, setMessage, sendMessage}) => {
    return(
      <div>
          <form className={classes.form}>
                <input 
                className = {classes.input}
                type = 'text'
                placeholder = 'Type a message...'
                value={message} 
                onChange={(event) => setMessage(event.target.value)} 
                onKeyPress={event => event.key === "Enter" ? sendMessage(event) : null}/>
                <button className={classes.sendButton} onClick = {(event) => sendMessage(event)}>Send</button>
          </form>
      </div>
    )
}

export default input;

