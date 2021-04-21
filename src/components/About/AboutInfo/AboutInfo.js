import React from 'react';

import classes from './AboutInfo.module.css';
import icon from '../../../assets/vertical_logo.png'

const aboutInfo = () => {
    return(
        <div>
            <img className={classes.Icon} src={icon}  alt="icon"/>
            <br/>
            <p className={classes.Paragraph}>            
                Animal Rescue Sofia is a Bulgarian organization working to 
                solve the stray dog and cats problem in Sofia. With the help of thousands
                of people we created our own shelter – the Farm, where 200 souls find
                treatment and care 365 days in a year. We are always open for adoptions and
                the shelter clinic offers free spaying and neutering.
                We strive to find good and responsible owners for the dogs and 
                cats place at our care. We seek homes for them both in Bulgaria and
                abroad. We re-home approx. 70 dogs every month.
                We do our best to respond to any signals about dogs and cats in distress but
                our resources are very limited at times. We take on injured and abused animals nearly every day.
                We apply the catch-neuter-return method as we believe this is the only humane and 
                legal way to curtail the stray dog population successfully.
                We are happy that every week dozens of people come to help at the shelter as volunteers.
                Their help is priceless as they care of walking and socializing the dogs. Thanks to
                the volunteers’ efforts, the dogs at the shelter feel comfortable around humans and build trust in people.
            </p>
        </div>
    )
}

export default aboutInfo;