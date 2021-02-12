import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';

class DogsEdit extends Component{
    constructor(props){
        super(props);
        this.state = {
            dogForm: {
                dog_name:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: "Dog's name"
                    },
                    value: ''
                },
                age:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: "Dog's age"
                    },
                    value: ''
                },
                breed:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: "Dog's breed"
                    },
                    value: ''
                },
                breed_size:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: "Breed's size"
                    },
                    value: ''
                },
                location:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: "Dog's location"
                    },
                    value: ''
                },
                image:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: "Dog's image"
                    },
                    value: ''
                },
                discription:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'textarea',
                        placeholder: "Short discription about the dog"
                    },
                    value: ''
                },
            }
        }
    }

    inputChangeHandler = (event, inputIndentifier) => {
        const updatedDogForm = {
            ...this.state.dogForm
        }
        const updatedFormElement = { 
            ...updatedDogForm[inputIndentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedDogForm[inputIndentifier] = updatedFormElement;
        this.setState({dogForm: updatedDogForm});
    }

    render(){
        const formElementsArray = [];
        for(let key in this.state.dogForm){
            formElementsArray.push({
                id: key,
                config: this.state.dogForm[key]
            })
        }
        return(
            <div>
                <Form onSubmit={this.newDogHandler}>
                    {formElementsArray.map((formElement) => (
                        <Form.Group key = {formElement.id}>
                            <Form.Label>{formElement.config.elementConfig.placeholder}</Form.Label>
                            <Form.Control 
                                elementype={formElement.config.elementType}
                                elementconfig={formElement.config.elementConfig}
                                value = {formElement.value}
                                onChange={(event) => this.inputChangeHandler(event, formElement.id)} />
                        </Form.Group>
                    ))}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default DogsEdit;