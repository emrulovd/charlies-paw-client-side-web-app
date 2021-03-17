import React, {Component} from 'react';

import classes from './Contact.module.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            contactForm:{
                name:{
                    elementType: 'input',
                    elementConfig: {
                            type: 'text',
                            placeholder: 'Your Name'
                    },
                    value:'',
                    validation:{
                        required: true
                    },
                    valid: false,
                    touched: false
                },
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
                title:{
                    elementType: 'input',
                    elementConfig: {
                            type: 'text',
                            placeholder: 'Title'
                    },
                    value:'',
                    validation:{
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                message:{
                    elementType: 'textarea',
                    elementConfig: {
                            type: 'text',
                            placeholder: 'Message'
                    },
                    value:'',
                    validation:{
                        required: true
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

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedContactForm = {
            ...this.state.contactForm
        }
        const updatedContactElement = {
            ...updatedContactForm[inputIdentifier]
        }
        updatedContactElement.value = event.target.value;
        updatedContactElement.valid = this.checkValidity(updatedContactElement.value, updatedContactElement.validation);
        updatedContactElement.touched = true;
        updatedContactForm[inputIdentifier] = updatedContactElement;
        this.setState({contactForm: updatedContactForm});
    }

    render(){
        const formElementsArray = [];
        for(let key in this.state.contactForm){
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
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
                <form onSubmit={this.signInHandler} className={classes.Form}>
                    <h4>Contact us</h4>
                            {form}
                    <Button>SEND</Button>
                </form>
            </div>
        )
    }
}


export default Contact; 