import React from 'react'

import about_batch from '../../../assets/about_batch.png';
import classes from './AboutBatch.module.css'

const aboutBatch = () => {
    return(
        <div className={classes.Container}>
            <img src={about_batch} alt=""/>
        </div>
    )
}

export default aboutBatch;