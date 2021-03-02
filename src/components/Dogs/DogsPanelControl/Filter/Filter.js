import React from 'react';

import classes from './Filter.module.css';

import FilterList from './FilterList/FilterList';

const filter = (props) => {
    return(
        <div className={classes.Container}>
            <h3>Filter</h3>
            <FilterList dogs={props.dogs} filterInputHandler = {props.filterInputHandler} rangeValue = {props.rangeValue}/>
        </div>
    ) 
}

export default filter;