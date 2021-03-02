import React from 'react';

import {ListGroup, ListGroupItem} from 'react-bootstrap';

import FilterListItemCheckbox from './FilterListItemCheckbox/FilterListItemCheckbox';
// import FilterListItemSelect from './FilterListItemSelect/FilterListItemSelect';

import classes from './FilterList.module.css';

const filterList = (props) => {

    const filters = [
        {location:{
            title: 'Location',
            values: ['Coventry', 'Liverpool', 'London', 'York']
        }},
        {size:{
            title: 'Size',
            values: ['Small', 'Average', 'Big']
        }}
    ]
    
    return(
      <div className={classes.Container}>
           <ListGroup>
                    <label><h6>{filters[0].location.title}</h6></label>
                    <ListGroupItem className={classes.ListItem} bsPrefix>
                            <FilterListItemCheckbox 
                            value={filters[0].location.values}
                            filterInputHandler = {props.filterInputHandler}/>
                    </ListGroupItem>
                    <label><h6>{filters[1].size.title}</h6></label>
                    <ListGroupItem className={classes.ListItem} bsPrefix>
                            <FilterListItemCheckbox 
                            value={filters[1].size.values}
                            filterInputHandler = {props.filterInputHandler}/>
                    </ListGroupItem>
          </ListGroup>
     </div>
    )
}

export default filterList;