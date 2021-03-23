import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import AdminSidebar from '../../components/Navigation/AdminSidebar/AdminSidebar';
import AdminUsers from '../../components/Admin/AdminUsers/AdminUsers';

class AdminPanel extends Component {
    render(){
        return(
          <Container fluid>
              <Row>
                  <Col>
                        <AdminSidebar/>
                  </Col>
                  <Col>
                        <Switch>
                            <Route path="/admin/users" component={AdminUsers}/>
                        </Switch>
                  </Col>
              </Row>
          </Container>
        )
    }
}

export default AdminPanel; 