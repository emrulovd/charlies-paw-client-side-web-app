import React, { Component } from 'react';
import { connect } from 'react-redux';


import * as actions from '../../../store/actions/index';
import classes from './Dogs-Edit.module.css';
import { Form, Button, Container } from 'react-bootstrap';



class DogsEdit extends Component{
    constructor(props){
        super(props);
        this.state = {
            dogForm: {
                dogName:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                    },
                    placeholder: 'Dog name',
                    value: ''
                },
                age:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text'
                    },
                    placeholder: 'Dog age',
                    value: ''
                },
                breed:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                    },
                    placeholder: 'Dog breed',
                    value: ''
                },
                breedSize:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                    },
                    placeholder: 'Breed size',
                    value: ''
                },
                location:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                    },
                    placeholder: 'Dogs location',
                    value: ''
                },
                image:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                    },
                    placeholder: 'Dog image',
                    value: ''
                },
                discription:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'textarea',
                    },
                    placeholder: 'Short discription about the dog',
                    value: ''
                },
            },
            loading: false,
            headers: null
        }
    }

    componentDidMount(){
        const headers = {
            "Authorization": this.props.token
        }
        this.inputDogPopulateHandler();
        this.setState({ headers: headers})
    }


    inputDogPopulateHandler = () => {
        if(this.props.params_id){
            const updatedForm = {
                ...this.state.dogForm
            }
            let updatedFormValue;
            for(let index in this.props.dogs[this.props.params_id]){
                    updatedFormValue = {
                        ...updatedForm[index]
                    }
                    updatedFormValue.value = this.props.dogs[this.props.params_id][index];
                    updatedForm[index] = updatedFormValue;
                    this.setState({dogForm: updatedForm});
            }
        }
    }

    updateDogHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for( let formElementIndentifier in this.state.dogForm){
            formData[formElementIndentifier] = this.state.dogForm[formElementIndentifier].value;
        }
        formData['id'] = this.props.params_id;
        this.props.onUpdateDog(this.state.headers, this.props.params_id, formData)
        this.props.updateDogHandler();
    }

    newDogHandler = ( event ) => {
        event.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for( let formElementIndentifier in this.state.dogForm){
            formData[formElementIndentifier] = this.state.dogForm[formElementIndentifier].value;
        }
        formData['id'] = this.props.dogs.length; // Adding temporary id to the post
        this.props.updateDogHandler();
        this.props.onCreateDog(this.state.headers, formData);
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
            if(key === '_id'){
                break;
            }
            formElementsArray.push({
                id: key,
                config: this.state.dogForm[key]
            })
        }
        return(
            <div>
                <Container className={classes.temp}>
                    <Form onSubmit={this.props.params_id ? this.updateDogHandler : this.newDogHandler}>
                        {formElementsArray.map((formElement) => (
                            <Form.Group key = {formElement.id}>
                                <Form.Label>{formElement.config.placeholder}</Form.Label>
                                <Form.Control 
                                    elementype={formElement.config.elementType}
                                    elementconfig={formElement.config.elementConfig}
                                    value = {formElement.config.value}
                                    onChange={(event) => this.inputChangeHandler(event, formElement.id)} />
                            </Form.Group>
                        ))}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onUpdateDog : (header, dog_id, dogUpdateForm) => dispatch(actions.updateDog(header, dog_id, dogUpdateForm)),
        onCreateDog : (header, dogForm) => dispatch(actions.createDog(header, dogForm))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogsEdit);