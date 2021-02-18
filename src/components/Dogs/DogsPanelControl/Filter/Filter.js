import React from 'react';

import classes from './Filter.module.css';

import FilterList from './FilterList/FilterList';

const filter = (props) => {
    return(
        <div className={classes.Container}>
            <h1>Filter</h1>
            <hr/>
            <FilterList dogs={props.dogs} filterInputHandler = {props.filterInputHandler}/>
        </div>
    ) 
}

export default filter;