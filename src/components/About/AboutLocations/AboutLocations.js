import React from 'react';

import classes from './AboutLocations.module.css';
import map from '../../../assets/aboutMap.png';

const aboutLocations = () => (
    <div className={classes.Container}>
        <img src={map} alt=""/>
   </div>
)


export default aboutLocations;