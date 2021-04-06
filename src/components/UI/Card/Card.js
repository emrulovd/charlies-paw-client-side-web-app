import React from 'react';


import classes from './Card.module.css';

const card = (props) => {
    return(
            <div className={classes.Container}>
                <div className={classes.Card}>
                    <div className={classes.CardFront}>
                        <h4>{props.dogs_number}</h4>
                    </div>
                    <div className={classes.CardText}>
                        <h4>{props.title}</h4>
                        <p>{props.text}</p>
                    </div>
                    <div className={classes.Stats}>
                        <div className={classes.StatValue}></div>
                        <div className={classes.StatType}></div>
                    </div>
                    <div className={classes.CardStats}></div>
                </div>
        </div>
    )
}

export default card;