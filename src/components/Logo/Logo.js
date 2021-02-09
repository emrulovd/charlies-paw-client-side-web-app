import React from 'react';

import Logo from '../../assets/logo_icon.png';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={Logo} alt="DogLogo"/>
    </div>
)

export default logo;