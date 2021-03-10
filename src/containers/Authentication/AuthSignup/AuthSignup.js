import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';

import classes from './AuthSignup.module.css'

class AuthSignup extends Component {
    constructor(props){
        super(props);
        this.state = {
            authForm:{
                email:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Mail Address'
                    },
                    value: '',
                    validation:{
                        required: true,
                        isEmail: true
                    },
                    valid: false,
                    touched: false
                },
                password:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'Password'
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
            formIsValid: false,
            loading: false,
            isSignup: true
        }
    }


    signUpHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.authForm.email.value, this.state.authForm.password.value, this.state.isSignup);
    }

    checkValidity(value, rules) {
        let isValid = true;
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedAuthForm = {
            ...this.state.authForm
        }

        const updatedAuthElement = {
            ...updatedAuthForm[inputIdentifier]
        }
        updatedAuthElement.value = event.target.value;
        updatedAuthElement.valid = this.checkValidity(updatedAuthElement.value, updatedAuthElement.validation);
        updatedAuthElement.touched = true;
        updatedAuthForm[inputIdentifier] = updatedAuthElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedAuthForm) {
            formIsValid = updatedAuthForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({authForm: updatedAuthForm, formIsValid: formIsValid});
    }

    render(){
        const formElementsArray = [];
        for(let key in this.state.authForm){
            formElementsArray.push({
                id: key,
                config: this.state.authForm[key]
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
            />))
        if( this.props.loading ){
            form = <Spinner/>;
        }
        let errorMessage = null;
        if(this.props.error){
            console.log(this.props.error.data)
            errorMessage = (
                <div>
                    <p>{this.props.error.status} {this.props.error.statusText}</p>
                    <p>Email already exists</p>
                </div>
            )
        }
        let authRedirect = null;
        if(this.props.isCreated){
            authRedirect = <Redirect to="/"/>
        }
        return(
            <div className={classes.Auth}> 
                {authRedirect}
                {errorMessage}
                <form onSubmit={this.signUpHandler}>
                    <h4>Create a profile</h4>
                        {form}
                    <Button disabled={!this.state.formIsValid}>SIGNUP</Button>
                </form>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return{
        loading: state.auth.loading,
        error: state.auth.error,
        isCreated: state.auth.isCreated !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( AuthSignup );