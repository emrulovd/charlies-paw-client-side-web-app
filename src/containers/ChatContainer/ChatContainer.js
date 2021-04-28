import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Switch, Route} from 'react-router';
import * as actions from '../../store/actions/index';

import {Container, Row, Col} from 'react-bootstrap';
// import Chat from './Chat/Chat';
import ChatRoom from './ChatRoom/ChatRoom';
import ChatList from '../../components/Chat/ChatsList/ChatsList';

class ChatContainer extends Component{

    componentDidMount() {
        const userID = localStorage.getItem('userID');
        this.props.onGetChatList(userID);
        this.props.onGetAllChats();
    }

    render(){
        return(
            <Container fluid>
                <Row>
                    <Col xs lg="2">
                        <ChatList chats = {this.props.chatRooms} history={this.props.history}/>
                    </Col>
                    <Col>
                        <Switch>
                            <Route path="/profile/messages/chat-room" component={() => <ChatRoom location = {this.props.location}/>}/> 
                        </Switch>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return{
        chatRooms: state.user.chats
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onGetChatList : (userID) => dispatch(actions.getChats(userID)),
        onGetAllChats : () => dispatch(actions.adminGetChats())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);