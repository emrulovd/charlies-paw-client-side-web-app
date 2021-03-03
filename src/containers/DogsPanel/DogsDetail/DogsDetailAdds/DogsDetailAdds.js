import React from 'react';

import {Row, Container} from 'react-bootstrap';
import classes from './DogsDetailAdds.module.css';

import DetailMap from './DetailMap/DetailMap';
import DetailDogshRelevantList from './DetailDogshRelevantList/DetailDogshRelevantList';

const dogsDetailAdds = (props) => {
    return(
        <div className={classes.Container}>
            <Container fluid>
                <Row>
                    <DetailMap location = {props.location}/>
                </Row>
                <Row>
                    <DetailDogshRelevantList
                     dogs = {props.dogs}
                     history = {props.history}
                     updateDetailDogHandler = {props.updateDetailDogHandler}/>
                </Row>
            </Container>
        </div>
    )
}

export default dogsDetailAdds;