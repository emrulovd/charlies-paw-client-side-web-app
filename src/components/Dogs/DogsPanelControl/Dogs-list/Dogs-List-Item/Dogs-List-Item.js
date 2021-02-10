import React from 'react';

import {ListGroup, Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import classes from './Dogs-List-Item.module.css';


const dogsListItem = (props) => {
    return(
        <a className={classes.Content} href={props.history}>
            <ListGroup.Item>
                 <Container fluid>
                     <Row>
                        <img src={props.image} alt=""/>
                         <Col>
                            <h4>{props.title}</h4>
                            <p><FontAwesomeIcon icon={faMapMarkedAlt}/> Location: {props.location}</p>
                            <p>{props.content}</p>
                        </Col>
                    </Row>
                 </Container>
            </ListGroup.Item>
        </a>
    )
}


export default dogsListItem;