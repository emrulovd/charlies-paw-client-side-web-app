import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Row';

import Reserved from './Resreved/Rserved'
import Contacts from './Contacts/Contacts'
import FooterNavigation from './FooterNavigation/FooterNavigation'; 
import classes from './Footer.module.css';


const footer = () => {
    const name = "DE<Code>"
    return(
        <div className={classes.Footer}>
            <Container fluid>
                <Row>
                    <Col>
                        <Reserved name={name}/>
                    </Col>
                    <Col>
                        <FooterNavigation/>
                    </Col>
                    <Col>
                        <Contacts/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default footer;