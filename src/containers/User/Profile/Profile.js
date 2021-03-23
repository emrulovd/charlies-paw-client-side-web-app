import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import {Container, Col, Row} from 'react-bootstrap';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
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
            }
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
            <Container>
            <div className = {classes.Container}>
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
                        <form className={classes.Form}>
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
        getUserData: (userID) => dispatch(actions.getUserData(userID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);