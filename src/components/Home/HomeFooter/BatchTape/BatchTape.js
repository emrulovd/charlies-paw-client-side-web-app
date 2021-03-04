import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './BatchTape.module.css';


import batch from '../../../../assets/batches.png';

const batchTape = () => {
    return(
        <div className={classes.BatchTape}>
            <Container fluid>
                <Row>
                    <Col>
                        <img src={batch} alt="sponsors"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default batchTape;