import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import {Container, Col, Row} from 'react-bootstrap';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Modal from '../../../components/UI/Modal/Modal';
import classes from './Profile.module.css'

class Profile extends Component {

    constructor(props){
        super(props);
        this.state={
            passwordForm:{
                current_password:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'Old Password'
                    },
                    value: '',
                    validation:{
                        required: true,
                    },
                    valid: false,
                    touched: false
                },
                new_password:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'New Password'
                    },
                    value: '',
                    validation:{
                        required: true,
                        minLength: 6
                    },
                    valid: false,
                    touched: false
                }
            },
            isShown: false
        }
    }

    checkValidity(value, rules) {
        let isValid = true;
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        return isValid;
    }


    componentDidMount() {
        const userID = localStorage.getItem('userID');
        this.props.getUserData(userID);
    }

    changePasswordHandler = (event) => {    
        event.preventDefault();
        console.log(this.state.passwordForm.current_password.value);
        const userID = localStorage.getItem('userID');
        const token = localStorage.getItem('token');
        const headers = {
            "Authorization": token
        }
        this.setState({isShown: true});
        this.props.getUpdatePassword(this.state.passwordForm.new_password.value, this.state.passwordForm.current_password.value, userID, headers);
    }


    inputChangedHandler = (event, inputIdentifier) => {
        const updatedPasswordForm = {
            ...this.state.passwordForm
        }
        const updatedPasswordElement = {
            ...updatedPasswordForm[inputIdentifier]
        }
        updatedPasswordElement.value = event.target.value;
        updatedPasswordElement.valid = this.checkValidity(updatedPasswordElement.value, updatedPasswordElement.validation);
        updatedPasswordElement.touched = true;
        updatedPasswordForm[inputIdentifier] = updatedPasswordElement;
        this.setState({passwordForm: updatedPasswordForm});
    }


    onContinueHandler = () => {
        console.log("Hey")
        this.setState({isShown: false});
    }
    render(){

        const formElementsArray = [];
        for(let key in this.state.passwordForm){
            formElementsArray.push({
                id: key,
                config: this.state.passwordForm[key]
            })
        }
        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType = {formElement.config.elementType}
                elementConfig = {formElement.config.elementConfig}
                value = {formElement.config.value}
                invalid = {!formElement.config.valid}
                shouldValidate = {formElement.config.validation}
                touched = {formElement.config.touched}
                changed = {(event) => this.inputChangedHandler(event, formElement.id)}  
            /> 
            ))
        if( this.props.loading ){
            form = <Spinner/>;
        }

        return(
            <Container fluid>
            <div className = {classes.Container}>
                    { this.state.isShown ? 
                        <Modal show = {this.state.isShown} onContinueHandler = {this.onContinueHandler}>
                            <p>Your password is changed successfully</p>
                        </Modal>
                        :null
                    }
                <Row>
                    <Col className={classes.Info}>
                        <h4>User Info: </h4>
                        <p><b>Name:</b> {this.props.user.name}</p>
                        <p><b>Address:</b> {this.props.user.address}</p>
                        <p><b>Phone Number:</b> {this.props.user.phone_number}</p>
                        <p><b>Email:</b> {this.props.user.email}</p>
                        <div className={classes.Button}>    
                        <Button>Edit Profile</Button>
                        </div>
                    </Col>
                    <Col className={classes.FormContainer}>
                        <h4>Change Password:</h4>
                        <form className={classes.Form} onSubmit={this.changePasswordHandler}>
                            {form}
                            <Button className={classes.FormButton}>Save</Button>
                        </form>
                    </Col>
                </Row>
            </div>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.user.user,
        loading: state.user.loading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getUserData: (userID) => dispatch(actions.getUserData(userID)),
        getUpdatePassword: (new_password, current_password, user_id, headers) => dispatch(actions.changePasword(new_password, current_password, user_id, headers))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);