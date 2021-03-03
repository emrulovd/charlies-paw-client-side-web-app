import React from 'react';

import {ListGroup} from 'react-bootstrap';
import classes from './DetailDogshRelevantList.module.css'

import DetailDogshRelevantListItem from './DetailDogshRelevantListItem/DetailDogshRelevantListItem';

const detailDogshRelevantList = (props) => {
    return(
        <div className={classes.Container}>
            <ListGroup horizontal>
                {props.dogs.map((dog, index) => {
                    if(index <= 4){
                        return(
                            <DetailDogshRelevantListItem
                            key={index}
                            image={dog.image}
                            id={dog.id}
                            history = {props.history}
                            updateDetailDogHandler = {props.updateDetailDogHandler}/>
                        )
                    }else{
                        return null;
                    }
                })}
            </ListGroup>
        </div>
    )
}


export default detailDogshRelevantList;