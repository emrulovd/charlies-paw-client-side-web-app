import React from 'react';


const adminDashboard = (props) => {

    return(
        <div>
            DASHBOARD
            <p>Dogs Registered: {props.dogs_number}</p>
        </div>
    )
}

export default adminDashboard;