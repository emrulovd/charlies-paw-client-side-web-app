import React from 'react';

import {Row, Container} from 'react-bootstrap';
import classes from './DogsDetailAdds.module.css';

import DetailMap from './DetailMap/DetailMap';

const dogsDetailAdds = (props) => {
    return(
        <div className={classes.Container}>
            <Container fluid>
                <Row>
                    <DetailMap google = {props.google}/>
                </Row>
                <Row>

                </Row>
            </Container>
        </div>
    )
}

export default dogsDetailAdds;