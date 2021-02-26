import React from 'react';

import {ListGroup, ListGroupItem} from 'react-bootstrap';

import FilterListItemCheckbox from './FilterListItemCheckbox/FilterListItemCheckbox';
// import FilterListItemSelect from './FilterListItemSelect/FilterListItemSelect';

import classes from './FilterList.module.css';

const filterList = (props) => {

    return(
      <div className={classes.Container}>
           <ListGroup>
              <label><h6>Location:</h6></label>
                  <ListGroupItem className={classes.ListItem} bsPrefix  >
                        <FilterListItemCheckbox filterInputHandler = {props.filterInputHandler}/>
                  </ListGroupItem>
          </ListGroup>
     </div>
    )
}

export default filterList;