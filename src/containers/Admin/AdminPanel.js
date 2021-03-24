import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import AdminSidebar from '../../components/Navigation/AdminSidebar/AdminSidebar';
import AdminUsers from '../../components/Admin/AdminUsers/AdminUsers';
import AdminDogs from '../../components/Admin/AdminDogs/AdminDogs';
import * as actions from '../../store/actions/index';

class AdminPanel extends Component {

    componentDidMount() {
        this.props.onGetUsers();
    }
    render(){
        return(
          <Container fluid>
              <Row>
                  <Col xs lg="2">
                        <AdminSidebar/>
                  </Col>
                  <Col>
                        <Switch>
                            <Route path="/admin/dashboard" component={AdminUsers}/>
                            <Route path="/admin/users" component={AdminUsers}/>
                            <Route path="/admin/dogs" component={AdminDogs}/>
                            <Route path="/admin/messages" component={AdminUsers}/>
                        </Switch>
                  </Col>
              </Row>
          </Container>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onGetUsers : () => dispatch(actions.adminGetUsers())
    }
}

export default connect(null, mapDispatchToProps)(AdminPanel); 