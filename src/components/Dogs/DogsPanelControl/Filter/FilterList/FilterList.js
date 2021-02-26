import React from 'react';

import {ListGroup, ListGroupItem} from 'react-bootstrap';

import FilterListItemCheckbox from './FilterListItemCheckbox/FilterListItemCheckbox';
import FilterListItemSelect from './FilterListItemSelect/FilterListItemSelect';
import Aux from '../../../../../hoc/Auxiliary';

const filterList = (props) => {

    return(
      <Aux>
           <ListGroup>
              <label><h6>Select location</h6></label>
                  <ListGroupItem>
                        {/* {
                          props.dogs.map((dog, index) => {
                          return( 
                              <FilterListItemCheckbox
                              key={index}
                              data = {dog.location}
                              filterInputHandler = {props.filterInputHandler}/>
                          )
                          })
                        } */}
                        <FilterListItemCheckbox filterInputHandler = {props.filterInputHandler}/>
                  </ListGroupItem>
          </ListGroup>
              <ListGroup>
              
          </ListGroup>
     </Aux>
    )
}

export default filterList;