import React from 'react';

import { Container, Row } from 'react-bootstrap';
import ContactBanner from './ContactBanner/ContactBanner';
import ContactInfo from './ContactInfo/ContactInfo';
import Contact from '../../containers/Contact/Contact';

const contactContainer = () => {
    return(
        <Container fluid>
            <Row>
                <ContactBanner/>
            </Row>
            <Row>
                <ContactInfo/>
            </Row>
            <Row>
                <Contact/>
            </Row>
        </Container>
    )
}

export default contactContainer;