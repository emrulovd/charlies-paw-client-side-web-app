import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DogsBanner from '../../components/Dogs/DogsBanner/DogsBanner';


class DogsPanelControl extends Component {
    
    render() {
        return(
            <Container fluid>
                <Row>
                    <DogsBanner/>
                </Row>
            </Container>
        )
    }   
}

export default DogsPanelControl;