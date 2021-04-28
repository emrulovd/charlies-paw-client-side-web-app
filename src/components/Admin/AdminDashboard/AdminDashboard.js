import React from 'react';

import { Container, Row} from 'react-bootstrap'; 
import AdminChart from './AdminChart/AdminChart';
import AdminDashboardBanner from './AdminDashboardBanner/AdminDashboardBanner';
import AdminDashboardBannerGroup2 from './AdminDashboardBannerGroup2/AdminDashboardBannerGroup2';

import avatar from '../../../assets/user_white.png';
import paw from '../../../assets/paw_white.png';

const adminDashboard = (props) => {

    let coventry_number = 0, london_number = 0, york_number = 0, liverpool_number = 0;
    props.dogs.map(dog => {
        if(dog.location === "Coventry"){
            coventry_number++;
        }if(dog.location === "London"){
            london_number++;
        }if(dog.location === "York"){
            york_number++;
        }if(dog.location === "Liverpool"){
            liverpool_number++;
        }
        return null;
    })
    return(
        <div>
            <Container fluid>
                <Row>
                    <AdminDashboardBanner number = {coventry_number} city = {"Coventry"}/>
                    <AdminDashboardBanner number = {london_number} city = {"London"}/>
                    <AdminDashboardBanner number = {york_number} city = {"York"}/>
                    <AdminDashboardBanner number = {liverpool_number} city = {"Liverpool"}/>
                </Row>
                <Row>
                    <AdminDashboardBannerGroup2 number = {props.dogs_number} icon = {paw} title = {"Dogs"}/>
                    <AdminDashboardBannerGroup2 number = {props.user_number} icon = {avatar} title = {"Users"}/>
                </Row>
                <AdminChart/>
            </Container>
        </div>
    )
}

export default adminDashboard;