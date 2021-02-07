import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './MainDetails.module.css';
import pic from '../../../../assets/main_details_asset.png'
import logo from '../../../../assets/Logo.png'

const mainDetails = () =>{
    return(
        <div className={classes.Container}>
           <Container fluid>
                <Row>
                    <img className={classes.Pic} src={pic} alt="shelter dog"/>
                    <Col>
                        <img src={logo} className={classes.Logo} alt="logo"/>
                        <h1>Who are we?</h1>
                        <p>Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night.
                         Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might.
                         Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue.
                         Ulysses — always fighting all the evil forces bringing peace and justice to all.</p>
                    </Col>
                </Row>
           </Container>
        </div>
    )
}


export default mainDetails;