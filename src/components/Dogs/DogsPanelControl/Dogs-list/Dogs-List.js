import React, { useState } from 'react';
import {Route, withRouter} from 'react-router-dom';

import DogsListItem from './Dogs-List-Item/Dogs-List-Item';
import DogsEdit from '../../../../containers/DogsPanel/Dogs-edit/Dogs-Edit';


import { ListGroup, Button } from 'react-bootstrap'
import classes from './Dogs-List.module.css';

const DogsList = (props) =>{
    const [changeRoute, routeCondition] = useState(false); // Temporary use 

    const addDogHandler = () => {
        props.history.replace('/dogs-list/edit-dog');
        routeCondition(true);
    }

    const goBackHandler = () => {
        props.history.replace('/dogs-list');
        routeCondition(false);
    }

    const detailDogPageHandler = (id) => {
        props.history.push(`/dogs-list/dog-details?q=${id}`)
    }

    return(
        <div className={classes.Container}>
            {   changeRoute ?<Button primary="true" onClick={goBackHandler}>Dog List</Button>
                : <Button primary="true" onClick={addDogHandler}>Add new dog</Button>
                 
            }

               { changeRoute ? <Route path='/dogs-list/edit-dog' exact component={DogsEdit}/>
                 :
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
                }
        </div>
    )
}

export default withRouter(DogsList);