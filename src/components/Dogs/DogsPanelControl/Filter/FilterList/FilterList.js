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
                        {
                          props.dogs.map((dog, index) => {
                          return( 
                              <FilterListItemCheckbox
                              key={index}
                              data = {dog.location}
                              filterInputHandler = {props.filterInputHandler}/>
                          )
                          })
                        }
                  </ListGroupItem>
          </ListGroup>
              <ListGroup>
              <label><h6>Select Breed</h6></label>
                  <ListGroupItem>
                    <select onChange={(event) => props.filterInputHandler(event)}>
                        {
                          props.dogs.map((dog, index) => {
                          return( 
                              <FilterListItemSelect
                              key={index}
                              data = {dog.breed}/>
                          )
                          })
                        }
                   </select>
                  </ListGroupItem>
          </ListGroup>
     </Aux>
    )
}

export default filterList;