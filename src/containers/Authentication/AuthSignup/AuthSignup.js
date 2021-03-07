import React, {Component} from 'react';
import axios from 'axios';

import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

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
            controlIsValid: false,
            loading: false
        }
    }


    signUpHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        let formData = {};
        for(let formElementIndentifier in this.state.authForm){
            formData[formElementIndentifier] = this.state.authForm[formElementIndentifier].value;
        }
        const authData = {
            data: formData
        }
        axios.post('localhost:8080/auth/signup', authData)
            .then(response => {
                this.setState({loading: false});
                console.log(response.data.message);
            })
            .catch(error => {
                this.setState({loading: false});
                console.log(error);
            })
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
        this.setState({authForm: updatedAuthForm});
    }

    render(){
        const formElementsArray = [];
        for(let key in this.state.authForm){
            formElementsArray.push({
                id: key,
                config: this.state.authForm[key]
            })
        }

        const form = formElementsArray.map(formElement => (
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

        return(
            <div className={classes.Auth}> 
                <form onSubmit={this.signUpHandler}>
                    <h4>Create a profile</h4>
                        {form}
                    <Button>SIGNIN</Button>
                </form>
            </div>
        );
    };
}


export default AuthSignup;