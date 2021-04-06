import React from 'react';


import classes from './Card.module.css';

const card = () => {
    return(
            <div className={classes.Container}>
                <div className={classes.Card}>
                    <div className={classes.CardImage}></div>
                    <div className={classes.CardText}>
                        <h4>Custom Card</h4>
                        <p>Lorem ipsum</p>
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