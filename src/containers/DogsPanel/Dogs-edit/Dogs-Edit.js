import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import * as actions from '../../../store/actions/index';
import classes from './Dogs-Edit.module.css';
import { Container, ListGroup, Col, Row } from 'react-bootstrap';



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
                    value: '',
                    label: 'Name'
                },
                age:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text'
                    },
                    placeholder: 'Dog age',
                    value: '',
                    label: 'Age'
                },
                breed:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                    },
                    placeholder: 'Dog breed',
                    value: '',
                    label: 'Breed'
                },
                breedSize:{
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            {value: 'Small', displayValue: 'Small'},
                            {value: 'Medium', displayValue: 'Medium'},
                            {value: 'Big', displayValue: 'Big'}
                        ]
                    },
                    placeholder: 'Breed size',
                    value: '',
                    label: 'Size'
                },
                location:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                    },
                    placeholder: 'Dogs location',
                    value: '',
                    label: 'Location'
                },
                image:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                    },
                    placeholder: 'Dog image',
                    value: '',
                    label: 'Image'
                },
                imageFile:{
                    elementType: 'file',
                    elementConfig: {
                        type: 'text',
                    },
                    placeholder: 'Dog image',
                    value: '',
                    label: 'Upload Image'
                },
                discription:{
                    elementType: 'textarea',
                    elementConfig: {
                        type: 'text',
                    },
                    placeholder: 'Short discription about the dog',
                    value: '',
                    label: 'Disicription'
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
    
    inputChangedHandler = (event, inputIndentifier) => {
        const updatedDogForm = {
            ...this.state.dogForm
        }
        const updatedFormElement = { 
            ...updatedDogForm[inputIndentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedDogForm[inputIndentifier] = updatedFormElement;
        this.setState({dogForm: updatedDogForm});
        console.log(this.state.dogForm);
    }

    updateFormElement = (data, inputIndentifier) =>{
        const updatedDogForm = {
            ...this.state.dogForm
        }
        const updatedFormElement = { 
            ...updatedDogForm[inputIndentifier]
        };
        updatedFormElement.value = data;
        updatedDogForm[inputIndentifier] = updatedFormElement;
        this.setState({dogForm: updatedDogForm});
    }

    getDogImage  = (event,inputIndentifier) => {
        event.preventDefault();
        console.log(inputIndentifier);
        // this.props.onGetImage(this.state.dogForm.breed.value);
        axios.get('https://dog.ceo/api/breed/'+ this.state.dogForm.breed.value.toLowerCase() +'/images/random')
            .then(response => {
               this.updateFormElement(response.data.message, inputIndentifier);
            }).catch(error => {
                console.log(error);
            })
        console.log(this.state.dogForm.image.value);
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

        let form = formElementsArray.map((formElement, index) => {
            if(index === 2){
                return(
                    <ListGroup horizontal key={formElement.id}>
                        <Input
                            elementType = {formElement.config.elementType}
                            elementConfig = {formElement.config.elementConfig}
                            value = {formElement.config.value}
                            invalid = {!formElement.config.valid}
                            shouldValidate = {formElement.config.validation}
                            touched = {formElement.config.touched}
                            label = {formElement.config.label}
                            changed = {(event) => this.inputChangedHandler(event, formElement.id)}  
                        /> 
                        <Input
                            key={formElementsArray[index + 1].id}
                            elementType = {formElementsArray[index + 1].config.elementType}
                            elementConfig = {formElementsArray[index + 1].config.elementConfig}
                            value = {formElementsArray[index + 1].config.value}
                            invalid = {!formElementsArray[index + 1].config.valid}
                            shouldValidate = {formElementsArray[index + 1].config.validation}
                            touched = {formElementsArray[index + 1].config.touched}
                            label = {formElementsArray[index + 1].config.label}
                            changed = {(event) => this.inputChangedHandler(event, formElementsArray[index + 1].id)}  
                        /> 
                    </ListGroup>    
                )
            } if(index === 5 ){
               return(
                <div>
                <Row key={formElement.id}>
                    <Col>
                        <Input
                            key={formElement.id}
                            elementType = {formElement.config.elementType}
                            elementConfig = {formElement.config.elementConfig}
                            value = {formElement.config.value}
                            invalid = {!formElement.config.valid}
                            shouldValidate = {formElement.config.validation}
                            touched = {formElement.config.touched}
                            label = {formElement.config.label}
                            changed = {(event) => this.inputChangedHandler(event, formElement.id)}  
                        /> 
                    </Col>
                    <Col>
                        <div className = {classes.Button}>
                            <Button click = {(event) => this.getDogImage(event, formElement.id)} >Fetch Image</Button>
                        </div>
                    </Col>
                    <Col>
                    <img src={this.state.dogForm.image.value} alt=""/>
                    </Col>
                 </Row>
                 {/* <Row>
                     <img src={this.state.dogForm.image.value} alt=""/>
                 </Row> */}
                 </div>
               )
            } 
            if(index === 3 ){
                return null
            }else {
                return (
                    <Input
                    key={formElement.id}
                    elementType = {formElement.config.elementType}
                    elementConfig = {formElement.config.elementConfig}
                    value = {formElement.config.value}
                    invalid = {!formElement.config.valid}
                    shouldValidate = {formElement.config.validation}
                    touched = {formElement.config.touched}
                    label = {formElement.config.label}
                    changed = {(event) => this.inputChangedHandler(event, formElement.id)}  
                     /> 
                )
            }
        })
        return(
            <div className={classes.Container}>
                <Container >
                    <form onSubmit={this.props.params_id ? this.updateDogHandler : this.newDogHandler}>
                        {form}
                        <Button type="submit">
                            Submit
                        </Button>
                    </form>
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
        onCreateDog : (header, dogForm) => dispatch(actions.createDog(header, dogForm)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogsEdit);