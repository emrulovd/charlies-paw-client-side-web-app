import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Row';

import classes from './Footer.module.css';


const footer = () => {
    const name = "DE<Code>"
    return(
        <div className={classes.Footer}>
            <Container fluid>
                <Row>
                    <Col>
                    
                    </p>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default footer;