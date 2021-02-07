import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './MainDetails.module.css';

const mainDetails = () =>{
    return(
        <div className={classes.Container}>
           <Container>
                <Row>
                    <Col>
                        <h1>GRID</h1>
                    </Col>
                    <Col>
                        <h1>GRID</h1>
                    </Col>
                </Row>
           </Container>
        </div>
    )
}


export default mainDetails;