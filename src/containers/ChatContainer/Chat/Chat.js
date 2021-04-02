// import React, { useEffect, useState } from 'react'; 
import React, {Component} from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import io from 'socket.io-client';
import * as actions from '../../../store/actions/index';

import InfoBar from '../../../components/Chat/InfoBar/InfoBar';
import Input from '../../../components/Chat/TempInput/Input';
import Messages from '../../../components/Chat/Messages/Messages';
import classes from './Chat.module.css';

let socket;


class Chat extends Component{
    constructor(props){
        super(props);
        this.state = {
            chat: {
                user_id: '',
                room: ''
            },
            message:'',
            messages: [],
            ENDPOINT: 'localhost:8080'
        }
    }

    componentDidMount(){
        const userID = localStorage.getItem('userID');
        this.props.onGetUser(userID);
        const { id, dog } = queryString.parse(this.props.location.search);
        this.setState({chat:{
            user_id: id, 
            room: dog
        }})
        this.populateChatMessages(dog);
        this.onJoinRoomHandler(id, dog);
        this.onMessageHandler();
    }

    componetDidUpdate(){
        this.onMessageHandler();
    }
    
    componentWillUnmount(){
        this.onDisconnectHandler();
    }

    onJoinRoomHandler = (id, dog) => {
        const employee_id = this.props.user_role === "employee" || this.props.user_role === "admin" ? id : null;
        socket = io(this.state.ENDPOINT);
        socket.emit('join', {user_id: id, user_name: this.props.name, user_role: this.props.user_role ,room: dog, employee_id: employee_id}, () => {
        })
    }

    onDisconnectHandler = () => {
        socket.emit('disconect')
        socket.off();
    }


    onMessageHandler = () => {
        socket.on('message', message => {
            const updateMessages  = [
                ...this.state.messages,
                message
            ];
            this.setState({messages: updateMessages});
        })
    }

    onSendMessageHandler = (event) => {
        event.preventDefault();
        if(this.state.message){
            socket.emit('sendMessage', { 
                user_id: this.state.chat.user_id, 
                room: this.state.chat.room, 
                name: this.props.name,
                employee_id: this.props.user_role === "user"? null : this.state.chat.user_id,
                role: this.props.user_role,
                message: this.state.message}, () => this.clearMessage());
        }
    }

    setMessage = (event) => {
        const newMessage = event
        this.setState({message: newMessage});
    }

    clearMessage = () => {
        this.setState({message: ''});
    }

    populateChatMessages = (title) => {
        let newMessages = [];
        if(this.props.user_role === "user"){
            for(let i in this.props.chats){
                if(this.props.chats[i].title === title){
                    newMessages = [
                        ...this.props.chats[i].messages
                    ]
                    break;
                }
            }
        }else{
            for(let i in this.props.admin_chats){
                if(this.props.admin_chats[i].title === title){
                    newMessages = [
                        ...this.props.admin_chats[i].messages
                    ]
                    break;
                }
            }
        }
        this.setState({messages: newMessages});
    }

    render(){
        return(
                <div className = {classes.outerContainer}>
                    <div className = {classes.container}>
                        <InfoBar room = {this.state.chat.room} onDisconnectHandler = {this.onDisconnectHandler} role={this.props.user_role}/>
                        <Messages messages = {this.state.messages} name={this.props.name}/>
                        <Input message = {this.state.message} setMessage = {this.setMessage} sendMessage = {this.onSendMessageHandler}/>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        name: state.user.user.name,
        chats: state.user.chats,
        user_role: state.auth.role,
        admin_chats: state.admin.chats
    }
}


const mapDispatchToProps = dispatch => {
    return{
        onGetUser: (userID) => dispatch(actions.getUserData(userID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

