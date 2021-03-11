import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import AboutBanner from './AboutBanner/AboutBanner';
import BatchTape from './BatchTape/BatchTape';
import AboutLocations from './AboutLocations/AboutLocations';
import AboutInfo from './AboutInfo/AboutInfo';

const about = () =>{
    return(
        <div>
            <AboutBanner/>
            
            <Container fluid>
                <Row>
                    <BatchTape/>
                </Row>
                <Row>
                    <Col>
                        <AboutLocations/>
                    </Col>
                    <Col>
                        <AboutInfo/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default about;
