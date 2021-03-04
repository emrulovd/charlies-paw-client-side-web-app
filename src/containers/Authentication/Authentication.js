import React, {Component} from 'react';


import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
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
                        placholder: 'Mail Address'
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
                        placholder: 'Password'
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

    render(){
        const formElementsArray = [];
        for(let key in this.state.controls){
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        const form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementConfig = {formElement.config.elementConfig}
                value = {formElement.config.value}
                placeholder = {formElement.config.elementConfig.placeholder}
                invalid = {!formElement.config.valid}
                shouldValidate = {formElement.config.validation}
                touched = {formElement.config.touched}
                changed = {(event) => this.inputChangedHandler(event, formElement.id)}  
            />
        ));

        return(
            <div className={classes.Auth}> 
                <form>
                    {form}
                    <Button>Signin</Button>
                </form>
            </div>
        );
    };
}


export default Authentication;