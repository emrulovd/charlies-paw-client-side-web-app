import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import AdminSidebar from '../../components/Navigation/AdminSidebar/AdminSidebar';
import AdminUsers from '../../components/Admin/AdminUsers/AdminUsers';
import AdminDogs from '../../components/Admin/AdminDogs/AdminDogs';
import DogsEdit from '../DogsPanel/Dogs-edit/Dogs-Edit';
import * as actions from '../../store/actions/index';

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
            },
            modified: false
        }
    }

    componentDidMount() {
        this.props.onGetUsers();
        this.props.onGetDogs();
    }

    componentDidUpdate(){
        if(this.state.modified){ // fetches the data after a dog is added or updated 
           this.setState({modified: !this.state.modified});
           setTimeout(() => { // Delay the fetch to prevent from racing
                this.props.onGetDogs();
           }, 100) 
        }
    }

    updateDogHandler = () => {
        this.setState({modified: true})
        this.props.history.push('/admin/dogs');
    }

    deleteDogHandler = (dog_id) => {
        const headers = {
          "Authorization": this.props.token
        }
        this.props.onDeleteDog(headers, dog_id);
        this.updateDogHandler();
      }

    updateExistingDogHandler = (dog_id) => {
        console.log(dog_id);
        this.props.history.replace(`/admin/dogs/edit-dog?q=${dog_id}`);
    }

    roleRequestSubmitHandler = (event, user_id) => {
        event.preventDefault();
        console.log(this.state.userRoleConfig.value + user_id);
        this.props.onUpdateUserRole(this.state.userRoleConfig.value, user_id);
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
                            <Route path="/admin/dogs/edit-dog" exact component={ () => (
                                <DogsEdit
                                dogs={this.props.dogs}
                                updateDogHandler ={this.updateDogHandler}
                                params_id = {this.props.location.search.split('?q=').join('')}
                                />)}/>
                            <Route path="/admin/dashboard" component={AdminUsers}/>
                            <Route path="/admin/dogs" >
                                <AdminDogs 
                                dogs={this.props.dogs}
                                history = {this.props.history}
                                deleteDogHandler = {this.deleteDogHandler}
                                updateExistingDogHandler = {this.updateExistingDogHandler}
                                />
                            </Route>
                            <Route path="/admin/users">
                                <AdminUsers 
                                users={this.props.users} 
                                role = {this.props.role}
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
        dogs: state.dg.dogs,
        role: state.auth.role,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onGetUsers : () => dispatch(actions.adminGetUsers()),
        onGetDogs : () => dispatch(actions.dogs()),
        onUpdateUserRole: (role, user_id) => dispatch(actions.adminUpdateUserRole(role, user_id)),
        onDeleteDog: (header, dog_id) => dispatch(actions.deleteDog(header, dog_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel); 