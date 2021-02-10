import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

const dogsPanel = (props) => {
    return(
        <Container fluid>
            <Row>
                <Col>
                    <h1>Filter</h1>
                </Col>
                <Col>
                    <h1>Dogs-list</h1>
                </Col>
            </Row>
        </Container>
    )
}


export default dogsPanel;