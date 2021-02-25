import React from 'react';
import { withRouter} from 'react-router-dom';

import DogsListItem from './Dogs-List-Item/Dogs-List-Item';


import { ListGroup, Button } from 'react-bootstrap'
import classes from './Dogs-List.module.css';

const DogsList = (props) =>{

    const addDogHandler = () => {
        props.history.replace('/dogs-list/edit-dog');
    }

    const detailDogPageHandler = (id) => {
        props.history.push(`/dogs-list/dog-details?q=${id}`)
    }

    return(
        <div className={classes.Container}>
                <Button primary="true" onClick={addDogHandler}>Add new dog</Button>
                <ListGroup variant="flush">
                    {
                        props.dogs.map((dog, index) =>{
                            return(
                                <DogsListItem
                                key={index}
                                title={dog.dogName}
                                location={dog.location}
                                image={dog.image}
                                content={dog.discription}
                                index={index}
                                click = {detailDogPageHandler}
                                />
                            )
                        })
                    }
                </ListGroup>
        </div>
    )
}

export default withRouter(DogsList);