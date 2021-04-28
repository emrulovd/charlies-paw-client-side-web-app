import React, {Component} from 'react';

class ChatRoom extends Component{
    constructor(props){
        super(props);
        this.state = {
            room:{
                user_id: '',
                chat_name: ''
            },
            message: ''
        }
    }





    render(){
        return(
            <div>Chat</div>
        )
    }
}

export default ChatRoom;