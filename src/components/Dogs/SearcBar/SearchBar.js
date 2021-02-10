import React from 'react';


import {Container, Row, Col} from 'react-bootstrap';

import classes from './SearchBar.css';

const searchBar = () =>{
    return(
        <Container className={classes.SearcBar}>
            <Row>
                <Col>
                <input type="text" placeholder="Search.."/>
                </Col>
            </Row>
        </Container>
    )
}

export default searchBar;