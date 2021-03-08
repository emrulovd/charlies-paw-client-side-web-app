import React, {Component} from 'react';
import axios from 'axios';

import classes from './AuthLogin.module.css';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

class AuthLogin extends Component {
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
                        },
                        valid: false,
                        touched: false
                    }
            }
        }
    }

    signInHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        let formData = {};
        for(let formElementIndentifier in this.state.authForm){
            formData[formElementIndentifier] = this.state.authForm[formElementIndentifier].value;
        }
        const authData = {
            email: formData.email,
            password: formData.password
        }
        axios.post('http://localhost:8080/auth/login', authData)
            .then(response => {
                console.log(response.message);
                console.log(response.data)
            })
    }

    checkValidity(value, rules) {
        let isValid = true;
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
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
        this.setState({authForm: updatedAuthForm});
    }
    
    render() {
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
        return(
            <div className={classes.Container}>
                <form onSubmit={this.signInHandler}>
                    <h4>Create a profile</h4>
                            {form}
                    <Button>Login</Button>
                </form>
            </div>
        )
    }
}

export default AuthLogin;