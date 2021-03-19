import React, {useState} from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import classes from './DogsPanelControl.module.css'

import DogsList from './Dogs-list/Dogs-List';
import Filter from './Filter/Filter';
import Pagination from '../../UI/Pagination/Pagination';
import SearchBar from '../SearcBar/SearchBar';

const DogsPanel = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage] = useState(6);
   

    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = props.dogs.slice(indexOfFirstDog, indexOfLastDog);


    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return(
        <Container fluid className={classes.DogsPanelControl}>
            <Row>
                <Col sm={2}>
                    <Filter dogs={props.dogsMain} filterInputHandler={props.filterInputHandler} rangeValue={props.rangeValue}/>
                </Col>
                <Col>
                    <Row>
                    <SearchBar searchValue = {props.searchDogHandler}/>
                    </Row>
                    <DogsList dogs={currentDogs} newDogHandler = {props.newDogHandler}/>
                    <Row>
                        <section className={classes.Pagination}>
                            <Pagination dogsPerPage = {dogsPerPage} totalDogs = {props.dogs.length} paginate = {paginate}/>
                        </section>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}


export default DogsPanel;