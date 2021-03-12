import React from 'react';

import classes from './AboutShortInfo.module.css';
import Button from '../../UI/Button/Button';

const aboutShortInfo = () => {
    return(
        <div className={classes.Container}>
            <h3 className={classes.Title}>Do you want to help?</h3>
            <p className={classes.Paragraph}>Become a volunteer. Any help maters!<br/>
               Come in one of our shelters in London, <br/>
               Coventry, Liverpool and York, contact us
            </p>
            <Button>CONTACT</Button>
        </div>
    )
}


export default aboutShortInfo;