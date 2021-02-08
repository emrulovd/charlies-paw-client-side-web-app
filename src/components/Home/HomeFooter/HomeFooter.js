import React from 'react';

import Footer from '../../Footer/Footer';
import Banner from './Banner/Banner';
import BatchTape from './BatchTape/BatchTape';
import classes from './HomeFooter.module.css'

const homeFooter = () => {
    return(
        <div className={classes.HomeFooter}>
            <Banner/>
            <BatchTape/>
            <Footer/>
        </div>
    )
}


export default homeFooter;