import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import SignUp from '../../components/Auth/Singup/Signup'

import classes from './Authentication.module.css'

class Authentication extends Component {
    constructor(props){
        super(props);
        this.state = {
            controls:{
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
            controlIsValid: false
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

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        console.log(inputIdentifier)
        const updatedAuthForm = {
            ...this.state.controls
        };
        const updatedFormElement = { 
            ...updatedAuthForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedAuthForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedAuthForm) {
            formIsValid = updatedAuthForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({controls: updatedAuthForm, controlIsValid: formIsValid});
    }

    render(){
        const formElementsArray = [];
        for(let key in this.state.controls){
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }


        return(
            <div className={classes.Auth}> 
            <Switch>
                    <Route path="/auth/signup" component={() => <SignUp
                     formElementsArray = {formElementsArray}
                     inputChangedHandler = {this.inputChangedHandler}
                     />} />
            </Switch>
            </div>
        );
    };
}


export default Authentication;