import React from 'react';

import {ListGroup, ListGroupItem} from 'react-bootstrap';

import FilterListItem from './FilterListItem/FilterListItem';

const filterList = (props) => {

    return(
        <ListGroup>
        <label><h6>Select location</h6></label>
            <ListGroupItem>
                  {
                    props.dogs.map((dog, index) => {
                    return( 
                        <FilterListItem
                        key={index}
                        data = {dog.location}/>
                    )
                    })
                  }
            </ListGroupItem>
      </ListGroup>
    )
}

export default filterList;