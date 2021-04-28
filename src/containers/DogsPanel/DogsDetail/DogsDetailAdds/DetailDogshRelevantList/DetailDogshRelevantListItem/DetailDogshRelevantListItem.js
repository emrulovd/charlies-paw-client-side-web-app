import React, { useState } from 'react';

import {Button} from 'react-bootstrap';
import classes from './DetailDogshRelevantListItem.module.css'

const DetailDogshRelevantListItem = (props) => {
    const [isShown, setIsShown] = useState(false);

    const newDogDetails = () => {
        props.history.push(`/dogs-list/dog-details?q=${props.id}`);
        props.updateDetailDogHandler(props.id);
    }

    const mouseOver = (
        <div className={classes.OverMouse} 
        onMouseLeave = { () => setIsShown(false)} 
        style={{backgroundImage: `url(/uploads/${props.image})`}}>
            <section>
                <Button onClick = {newDogDetails}>See More</Button>
            </section>
        </div>
    )
    return(
        <div className={classes.Container}> 
           { isShown ? 
             mouseOver
            :
            <img src={`/uploads/${props.image}`} alt=''
            onMouseOver = {() => setIsShown(true)}/>
        }
        </div>
    )
}


export default DetailDogshRelevantListItem;