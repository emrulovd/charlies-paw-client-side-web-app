import React from 'react';

import {Col, Row} from 'react-bootstrap';
import logo from '../../../../../assets/logo_icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faPaw, faCalendarAlt  } from '@fortawesome/free-solid-svg-icons'

import classes from './DogsInfo.module.css';

const dogsInfo = (props) => {
    return(
        <div className={classes.Container}>
            <img src={logo} alt='dog'/>
            <h3>{props.dogName}</h3>
            <section>
                <Row>
                    <Col>
                        <div className={classes.innerContainer}>    
                            <label><FontAwesomeIcon icon={faPaw}/>  Breed:</label>
                            <h4>{props.breed}</h4>
                            <label><FontAwesomeIcon icon={faMapMarkedAlt}/>  Location:</label>
                            <h4>{props.location}</h4>
                        </div>
                    </Col>
                    <Col>
                    <div className={classes.innerContainer}>
                            <label>Size:</label>
                            <h4>{props.size}</h4>
                            <label><FontAwesomeIcon icon={faCalendarAlt}/>  Age:</label>
                            <h4>{props.age}</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <p>{props.discription}</p>
                </Row>
            </section>
        </div>
    )
}

export default dogsInfo;