import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import classes from './DogsSummary.module.css';

const dogsSummary = (props) => {
    return(
        <Aux>
             <h3>Change successfully made</h3>
             <div className={classes.Paragraph}>
                 <p>Dog {props.dogName} successfully added to favourites</p>
                 <p>If you want to see the following changes please continue to favourites</p>
             </div>   
        </Aux>
    )
}

export default dogsSummary;
