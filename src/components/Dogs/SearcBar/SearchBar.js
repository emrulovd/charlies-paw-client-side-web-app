import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './SearchBar.module.css';

const searchBar = () =>{
    return(
        <Container className={classes.SearchBar}>
            <Row>
                <Col>
                    <div className={classes.Wrapper}>
                        <input type="text" placeholder="Search...."/>
                        <a href="/dogs-list" ><FontAwesomeIcon icon={faSearch}/></a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default searchBar;