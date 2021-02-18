import React from 'react';

import {ListGroup, ListGroupItem} from 'react-bootstrap';

const filterList = (props) => {

    return(
        <ListGroup>
        <label><h6>Select location</h6></label>
          <ListGroupItem>
            {
            props.dogs.map((dog, index) => {
              return <div>
                        <label>{dog.location}</label>
                        <input type="checkbox" value={dog.location}/>
                     </div>
            })
            }
          </ListGroupItem>
      </ListGroup>
    )
}

export default filterList;