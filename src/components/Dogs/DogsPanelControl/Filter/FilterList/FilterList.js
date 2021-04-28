import React from 'react';

import {ListGroup, ListGroupItem} from 'react-bootstrap';

import FilterListItemCheckbox from './FilterListItemCheckbox/FilterListItemCheckbox';
import FilterListItemRange from './FilterListItemRange/FilterListItemRange';

import classes from './FilterList.module.css';

const filterList = (props) => {

    const filters = [
        {location:{
            title: 'Location',
            values: ['Coventry', 'Liverpool', 'London', 'York']
        }},
        {size:{
            title: 'Size',
            values: ['Small', 'Medium', 'Big']
        }},
        {age:{
            title: 'Age'
        }}
    ]
    
    return(
      <div className={classes.Container}>
           <ListGroup>
                    <label><h6>{filters[1].size.title}</h6></label>
                    <ListGroupItem className={classes.ListItem} bsPrefix>
                            <FilterListItemCheckbox 
                            value={filters[1].size.values}
                            filterInputHandler = {props.filterInputHandler}/>
                    </ListGroupItem>
                    <label><h6>{filters[2].age.title}</h6></label>
                    <ListGroupItem className={classes.ListItem} bsPrefix>
                            <FilterListItemRange
                            filterInputHandler = {props.filterInputHandler}
                            rangeValue = {props.rangeValue}
                            />
                    </ListGroupItem>
                    <label><h6>{filters[0].location.title}</h6></label>
                    <ListGroupItem className={classes.ListItem} bsPrefix>
                            <FilterListItemCheckbox 
                            value={filters[0].location.values}
                            filterInputHandler = {props.filterInputHandler}/>
                    </ListGroupItem>
          </ListGroup>
     </div>
    )
}

export default filterList;