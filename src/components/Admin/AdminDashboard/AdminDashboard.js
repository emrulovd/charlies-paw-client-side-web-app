import React from 'react';

import { Container, Row, Col } from 'react-bootstrap'; 
import AdminChart from './AdminChart/AdminChart';
import AdminDashboardBanner from './AdminDashboardCards/AdminDashboardBanner';

const adminDashboard = (props) => {

    return(
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <AdminDashboardBanner dogs_number = {props.dogs_number}/>
                    </Col>
                    <Col>
                        <AdminDashboardBanner dogs_number = {props.dogs_number}/>
                    </Col>
                </Row>
                <Row>
                    <AdminChart/>
                </Row>
            </Container>
        </div>
    )
}

export default adminDashboard;