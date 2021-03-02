import React from 'react';
 

import {Button, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import classes from './Dogs-List-Item.module.css';





const dogsListItem = (props) => {
    
    const MAX_LENGTH = 150;
    return(
        <div className={classes.Container}>
            <Row>
                {/* <Col className={classes.Image} noGutters={false}> */}
                    <img src={props.image} alt=""/>
                {/* </Col> */}
                <Col className={classes.Info}>
                    <h3>{props.title}</h3>
                    <section><FontAwesomeIcon icon={faCalendarAlt}/> Age: <h5>{props.age}</h5></section>
                    <section><FontAwesomeIcon icon={faMapMarkedAlt}/> Location: <h5>{props.location}</h5></section>
                </Col>
            </Row>
            <Row className={classes.Discription} bsPrefix>
                    {
                        props.content.length > MAX_LENGTH ?
                        (
                            <div>
                            {`${props.content.substring(0, MAX_LENGTH)}...`}
                            </div>
                        ) :
                        <p>{props.content}</p>
                              
                    }
                    <Button onClick={() => (props.detailDogPageHandler(props.id))}>see more details</Button>
            </Row>
        </div>
    )
}


export default dogsListItem;