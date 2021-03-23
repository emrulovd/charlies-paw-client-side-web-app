import React from 'react'

import feed_dog from '../../../assets/about_feed_dog.png';
import classes from './AboutShortInfoPic.module.css';

const aboutShortInfoPic = () => (
    <div className={classes.Container}>
        <img src={feed_dog} alt=""/>
    </div>
)

export default aboutShortInfoPic;