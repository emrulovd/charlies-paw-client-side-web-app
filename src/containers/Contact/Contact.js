import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import { Row, Col } from 'react-bootstrap';

import classes from './Contact.module.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';



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


    contactHandler = (event) => {
        event.preventDefault();
        this.props.onContact(
            this.state.contactForm.name.value,
            this.state.contactForm.email.value,
            this.state.contactForm.title.value,
            this.state.contactForm.message.value
            );
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
        let form = formElementsArray.map((formElement, index) => {
            if(index === 0){
                return(
                    <Row>
                        <Col>
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
                        </Col>
                        <Col>
                                <Input
                                key={formElementsArray[1].id}
                                elementType = {formElementsArray[1].config.elementType}
                                elementConfig = {formElementsArray[1].config.elementConfig}
                                value = {formElementsArray[1].config.value}
                                invalid = {!formElementsArray[1].config.valid}
                                shouldValidate = {formElementsArray[1].config.validation}
                                touched = {formElementsArray[1].config.touched}
                                changed = {(event) => this.inputChangedHandler(event, formElementsArray[1].id)}  
                                />
                        </Col>
                    </Row>
                )
            }
            else if(index === 1){
                return null;
            }
            else{
               return(
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
               )
            }
        })

            if(this.props.loading){
                form = <Spinner/>;
            }
        return(
            <div className={classes.Container}>
                <form onSubmit={this.contactHandler} className={classes.Form}>
                    <h4>Contact us</h4>
                            {form}
                    <Button>SEND</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.cnt.loading,
        message: state.cnt.message,
        isSuccessful: state.cnt.message !== null
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onContact: (name, email, title, message) => dispatch(actions.contact(name, email, title, message))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact); 