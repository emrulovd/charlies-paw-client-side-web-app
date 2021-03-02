import React from 'react';

import classes from './DogsBanner.module.css';

import paws from '../../../assets/paw.png';

const dogsBanner = () => <div className={classes.DogsBanner}><img src={paws} alt="paws"/></div>

export default dogsBanner;