import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import AdminSidebar from '../../components/Navigation/AdminSidebar/AdminSidebar';
import AdminUsers from '../../components/Admin/AdminUsers/AdminUsers';
import AdminDogs from '../../components/Admin/AdminDogs/AdminDogs';
import * as actions from '../../store/actions/index';
import Input from '../../components/UI/Input/Input';

class AdminPanel extends Component {

    constructor(props){
        super(props);
        this.state = {
            userRoleConfig:{
                elementType: 'select',
                elementConfig:{
                    options: [
                        {value: 'user', displayValue: 'user'},
                        {value: 'employee', displayValue: 'employee'}
                    ]
                },
                value:''
            }
        }
    }

    componentDidMount() {
        this.props.onGetUsers();
        this.props.onGetDogs();
    }

    roleRequestSubmitHandler = (event, user_id) => {
        event.preventDefault();
        console.log(this.state.userRoleConfig.value + user_id);
        
    }

    roleInputHandler = (event) => {
        console.log(event.target.value)
        const roleForm = {
            ...this.state.userRoleConfig
        }
        roleForm.value  = event.target.value;
        this.setState({ userRoleConfig: roleForm});
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
                            <Route path="/admin/dogs" >
                                <AdminDogs dogs={this.props.dogs}/>
                            </Route>
                            <Route path="/admin/users">
                                <AdminUsers 
                                users={this.props.users} 
                                roleConfig = {this.state.userRoleConfig} 
                                roleInputHandler = {this.roleInputHandler}
                                roleRequestSubmitHandler = {this.roleRequestSubmitHandler}/>
                            </Route>
                            <Route path="/admin/messages" component={AdminUsers}/>
                        </Switch>
                  </Col>
              </Row>    
          </Container>
        )
    }
}

const mapStateToProps = state => {
    return{
        users: state.admin.users,
        dogs: state.dg.dogs
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onGetUsers : () => dispatch(actions.adminGetUsers()),
        onGetDogs : () => dispatch(actions.dogs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel); 