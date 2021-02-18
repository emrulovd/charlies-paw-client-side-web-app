import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './SearchBar.module.css';

const searchBar = (props) =>{
    return(
        <Container className={classes.SearchBar}>
            <Row>
                <Col>
                    <div className={classes.Wrapper}>
                        <input type="text" placeholder="Search...." onChange = {(event) => props.searchValue(event)}/>
                        {/* <input type="text" placeholder="Search...." onChange = {(event) => props.search(event)}/> */}
                        <button onClick = {props.search.bind()}><FontAwesomeIcon icon={faSearch}/></button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default searchBar;