import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';

class DogsEdit extends Component{
    constructor(props){
        super(props);
        this.state = {
            dog: {
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

    render(){
        return(
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Dog's Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter dog's name" />
                    </Form.Group>
    
                    <Form.Group>
                        <Form.Label>Age of the dog</Form.Label>
                        <Form.Control type="text" placeholder="Enter dog's age" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Breed of the dog</Form.Label    >
                        <Form.Control type="text" placeholder="Enter dog's breed" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Breed's size</Form.Label    >
                        <Form.Control type="text" placeholder="Enter breed's size" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Location of the dog</Form.Label    >
                        <Form.Control type="text" placeholder="Enter dog's location" />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Short discription of the</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group> 
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default DogsEdit;