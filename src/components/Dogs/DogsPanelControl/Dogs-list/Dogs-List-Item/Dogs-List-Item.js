import React from 'react';
 

import {ListGroup, Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import classes from './Dogs-List-Item.module.css';





const dogsListItem = (props) => {


    return(
        <section className={classes.Content}>
            <ListGroup.Item>
                 <Container fluid>
                     <Row>
                        <img src={props.image} alt=""/>
                         <Col>
                            <h4>{props.title}</h4>
                            <p><FontAwesomeIcon icon={faMapMarkedAlt}/> Location: {props.location}</p>
                            <p>{props.content}</p>
                        </Col>
                        <button onClick={() => (props.click(props.index))}>see more details</button>
                    </Row>
                 </Container>
            </ListGroup.Item>
        </section>
    )
}


export default dogsListItem;