import React from 'react';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

const signup = (props) => {

    const form = props.formElementsArray.map(formElement => (
        <Input
            key={formElement.id}
            elementType = {formElement.config.elementType}
            elementConfig = {formElement.config.elementConfig}
            value = {formElement.config.value}
            invalid = {!formElement.config.valid}
            shouldValidate = {formElement.config.validation}
            touched = {formElement.config.touched}
            changed = {(event) => props.inputChangedHandler(event, formElement.id)}  
        />
    ));

    return(
        <div>
            <form>
                <h4>Create a profile</h4>
                {form}
                <Button>SIGNIN</Button>
            </form>
        </div>
    )
}


export default signup;