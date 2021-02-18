import React from 'react';
import {withRouter} from 'react-router-dom';

import {Container, Row, Col, Button} from 'react-bootstrap';
import classes from './DogsDetail.module.css';

import DogsBanner from '../DogsBanner/DogsBanner';

const DogDetail = (props) =>{ 
    const params_id = props.location.search.split('?q=').join('')
    const dog = props.details(params_id);;
    return(
        <div>
            <DogsBanner/>
            <Container fluid className={classes.Container}>
                    <Row>
                        <Col>
                            <img src={dog.image} alt='dog'/>
                        </Col>
                        <Col>
                            <h1>{dog.dogName}</h1>
                            <p>{dog.discription}</p>
                            <Button variant="success">Update</Button>
                            <Button variant="danger" onClick={() => props.deleteHandler(params_id)}>Delete</Button>
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}

export default withRouter(DogDetail);