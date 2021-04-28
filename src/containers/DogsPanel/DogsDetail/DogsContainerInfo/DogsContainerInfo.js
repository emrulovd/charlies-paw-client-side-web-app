import React from 'react';
import { connect } from 'react-redux'; 
// import { Link } from 'react-router-dom';

import { Col, Row, Container} from 'react-bootstrap';

import DogsInfo from './DogsInfo/DogsInfo';
import DogsSummary from '../../../../components/Dogs/DogsSummary/DogsSummary';
import Modal from '../../../../components/UI/Modal/Modal';
import Button from '../../../../components/UI/Button/Button';
import classes from './DogsContainerInfo.module.css';

const dogsContainerInfo = (props) => {

    const getChat = () => {
        props.history.replace(`/profile/messages/chat-room?id=${props.userID}&dog=${props.dogName}`);
    }

    return(
        <div className={classes.Container}>
            <Container fluid>
                { props.favourites ? 
                    <Modal show = {props.favourites} onContinueHandler = {props.onContinueHandler}>
                        <DogsSummary dogName={props.dogName}/>
                    </Modal>
                    : null
                }
                <Row >
                    <img src={`/uploads/${props.image}`} alt="dog"/>
                    <Col>
                        <DogsInfo
                        dogName = {props.dogName}
                        age = {props.age}
                        location = {props.location}
                        size = {props.size}
                        breed = {props.breed}
                        discription = {props.discription}
                        />
                       { props.isAuth && props.userRole ===  "user"?  
                            <div className={classes.ButtonContainer}>
                                <Button click={props.addToFavourites}>Add to favouirites</Button> 
                                <Button click={getChat}>Contact</Button>
                            </div>
                            : null
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isAuth: state.auth.token,
        userID: state.auth.userId
    }
}

export default connect(mapStateToProps)(dogsContainerInfo);