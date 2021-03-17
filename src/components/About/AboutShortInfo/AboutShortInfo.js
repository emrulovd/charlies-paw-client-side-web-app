import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import classes from './AboutShortInfo.module.css';
import Button from '../../UI/Button/Button';

const AboutShortInfo = (props) => {
    const [contactCheck, handleContact] = useState(false);

    const onHandleContact = () => {
        handleContact(true);
    }
    let contact = null;
    if(contactCheck){
         contact = <Redirect to="/contact"/>
    } 
    return(
        <div className={classes.Container}>
            {contact}
            <h3 className={classes.Title}>Do you want to help?</h3>
            <p className={classes.Paragraph}>Become a volunteer. Any help maters!<br/>
               Come in one of our shelters in London, <br/>
               Coventry, Liverpool and York, contact us
            </p>
            <Button click={onHandleContact}>CONTACT</Button>
        </div>
    )
}


export default AboutShortInfo;