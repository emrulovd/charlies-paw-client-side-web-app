import React from 'react';

import { ListGroup } from 'react-bootstrap';
import AdminDogsItem from './AdminDogsItem/AdminDogsItem';

const adminDogsItems = (props) => {
    return(
        <div>
            <ListGroup variant="flush">
                {
                    props.dogs.map((dog, index) => {
                        return(
                            <AdminDogsItem
                                key={index}
                                name={dog.dogName}
                                location={dog.location}
                                image = {dog.image}
                                breed={dog.breed}
                            />
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}

export default adminDogsItems;