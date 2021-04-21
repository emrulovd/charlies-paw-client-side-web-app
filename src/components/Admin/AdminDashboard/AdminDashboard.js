import React from 'react';

import { Container, Row} from 'react-bootstrap'; 
import AdminChart from './AdminChart/AdminChart';
import AdminDashboardBanner from './AdminDashboardBanner/AdminDashboardBanner';
import AdminDashboardBannerGroup2 from './AdminDashboardBannerGroup2/AdminDashboardBannerGroup2';

import avatar from '../../../assets/user_white.png';
import paw from '../../../assets/paw_white.png';

const adminDashboard = (props) => {

    return(
        <div>
            <Container fluid>
                <Row>
                    <AdminDashboardBanner number = {props.user_number}/>
                    <AdminDashboardBanner number = {props.dogs_number}/>
                    <AdminDashboardBanner number = {props.user_number}/>
                    <AdminDashboardBanner number = {props.user_number}/>
                </Row>
                <Row>
                    <AdminDashboardBannerGroup2 number = {props.dogs_number} icon = {paw} title = {"Dogs"}/>
                    <AdminDashboardBannerGroup2 number = {props.user_number} icon = {avatar} title = {"Users"}/>
                </Row>
            </Container>
        </div>
    )
}

export default adminDashboard;