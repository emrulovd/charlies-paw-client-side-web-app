import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import classes from './AuthLogin.module.css';
// import { faFacebook  } from '@fortawesome/free-solid-svg-icons'
import { Row } from 'react-bootstrap';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';


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
            },
            isSignup: false
        }
    }

    signInHandler = (event) => {
        event.preventDefault();
        const authData = {
            email: this.state.authForm.email.value,
            password: this.state.authForm.password.value
        }
        this.props.onAuth(authData, this.state.isSignup);
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


    onGoogleResponseHandler = (response) => {
        try{    
            this.props.onGoogleAuth(response.tokenObj.id_token, response.googleId, 'user', true, response.tokenObj.expires_in);
        }catch(error){
            console.log(error);
        }
    }

    onFacebookResponseHandler = (response) => {
        console.log(response);
        try{
            this.props.onFacebookAuth(response.accessToken, response.id, 'user', true, 3600);
        }catch(error){
            console.log(error);
        }
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
        
        if(this.props.loading) {
            form = <Spinner/>;
        }

        let errorMessage = null;
        if(this.props.error){
            console.log(this.props.error)
            errorMessage = (
                <div>
                    <p>{this.props.error.data.message}</p>
                    <p>{this.props.error.status} {this.props.error.statusText}</p>
                </div>
            )
        }

        let authRedirect = null;
        if(this.props.isAuth){
            console.log(this.props.isAuth);
            authRedirect = (
                <Redirect to = "/"/>
            )
        }
        return(
            <div className={classes.Auth}>
                {authRedirect}
                {errorMessage}
                <form onSubmit={this.signInHandler}>
                    <h4>Login to your profile</h4>
                            {form}
                    <Button>Login</Button>
                    <GoogleLogin
                    clientId = "425023239014-r4iihe16i1nrgfuc31bub8vpgaglmhta.apps.googleusercontent.com"
                    buttonText = "&nbsp;&nbsp;Sign In with Google"
                    className = {classes.BtnGoogle}
                    onSuccess = {this.onGoogleResponseHandler}
                    onFailure = {this.onGoogleResponseHandler}
                    cookiePolicy = {'single_host_origin'}
                    />
                    <FacebookLogin
                    appId="821806635388049"
                    autoLoad = {false}
                    fields = "name, email, picture"
                    cssClass = {classes.BtnFacebook}
                    textButton = "&nbsp;&nbsp;Sign In with Facebook" 
                    callback = {this.onFacebookResponseHandler}
                    icon={<i  style={{marginLeft:'5px'}}></i>}/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAuth: (email, password, isSignup) => dispatch( actions.auth(email, password, isSignup)),
        onGoogleAuth: (token, userId, role, isCreated, expires_in) => dispatch( actions.googleAuth(token, userId, role, isCreated, expires_in)),
        onFacebookAuth: (token, userId, role, isCreated, expires_in) => dispatch( actions.facebookAuth(token, userId, role, isCreated, expires_in))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin);