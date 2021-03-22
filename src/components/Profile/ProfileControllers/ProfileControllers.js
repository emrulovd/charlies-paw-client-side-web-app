import React from 'react';

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
                        <Button>PROFILE</Button>
                        <Button>FAVOURITES</Button>
                        <Button>MESSGAGES</Button>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default profileController;