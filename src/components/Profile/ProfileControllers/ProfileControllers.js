import React from 'react';
import { Link } from 'react-router-dom';

import {Container,Row, Col} from 'react-bootstrap';
import Button from '../../UI/Button/Button';
import profile from '../../../assets/profile.png';
import classes from './ProfileControllers.module.css';


const profileController = () => {

    return(
        <Container>
            <div className={classes.Container}>
                <img src={profile} alt=""/>
                <Row>
                    <Col className={classes.ButtonGroup}>
                        <Link to='/profile'><Button>PROFILE</Button></Link>
                        <Link to='/profile/favourites'><Button>FAVOURITES</Button></Link>
                        <Link to='/profile/messages'><Button>MESSAGES</Button></Link>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default profileController;