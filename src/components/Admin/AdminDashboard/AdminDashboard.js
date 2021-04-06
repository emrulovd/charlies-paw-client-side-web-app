import React from 'react';

import AdminDashboardCards from './AdminDashboardCards/AdminDashboardCards';

const adminDashboard = (props) => {

    return(
        <div>
            DASHBOARD
            <p>Dogs Registered: {props.dogs_number}</p>
            <AdminDashboardCards/>
        </div>
    )
}

export default adminDashboard;