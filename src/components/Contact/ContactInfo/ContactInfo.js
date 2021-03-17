import React from 'react';

import {Row, Container} from 'react-bootstrap';
import classes from './ContactInfo.module.css';
import ContactLocationInfo from './ContactLocationInfo/ContactLocationInfo';

const contactInfo = () => {
    const information = [
        {city: 'London', address:'Address: 64 Sample street', phone:'Phone: +44 7709 214 328', email: 'Email: charlipaw@coventry.ac.uk'},
        {city: 'Coventry', address:'Address: 4 Sample street', phone:'Phone: +44 3709 218 828', email: 'Email: charlipaw@coventry.ac.uk'},
        {city: 'York', address:'Address: 34 Sample street', phone:'Phone: +44 7729 214 325', email: 'Email: charlipaw@coventry.ac.uk'},
        {city: 'Liverpool', address:'Address: 12 Sample street', phone:'Phone: +44 7109 214 328', email: 'Email: charlipaw@coventry.ac.uk'},
    ]

    return(
        <div className={classes.Container}>
            <div className={classes.InnerContainer}>
                <h3>Contact Info:</h3>
                <Row sm={4}>
                    {
                        information.map((info, index) => {
                            return(
                                    <ContactLocationInfo
                                    key={index}
                                    location={info.city}
                                    address={info.address}
                                    phone={info.phone}
                                    email={info.email}
                                    />
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}

export default contactInfo;