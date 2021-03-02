import React, {Component} from 'react';
import axios from 'axios';

import {Container, Row, Col, Button} from 'react-bootstrap';
import classes from './DogsDetail.module.css';

import DogsBanner from '../../../components/Dogs/DogsBanner/DogsBanner';
import DogsContainerInfo from './DogsContainerInfo/DogsContainerInfo';


class DogDetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            dog: [],
            params_id: this.props.location.search.split('?q=').join('')
        }
    }
    componentDidMount(){
        this.fetchDog();
    }

    async fetchDog(){
        axios.get('http://localhost:8080/dogs/' + this.state.params_id)
            .then(result => {
                const dog = result.data.dog;
                this.setState({dog: dog})
                console.log(result.data.message);
            })
    }

    deleteDogHandler = () => {
      axios.delete('http://localhost:8080/dogs/' + this.state.params_id )
            .then(res => {
                console.log(res.data.message);
            })
      this.props.updateDogHandler();
    }

    updateDogHandler = () => {
        console.log(this.props);
        this.props.history.replace(`/dogs-list/edit-dog?q=${this.state.params_id}`);
    }

    render(){
        return(
            <div>
                <DogsBanner/>
                <Container fluid className={classes.Container}>
                        <Row>
                            {/* <Col>
                                <img src={this.state.dog.image} alt='dog'/>
                            </Col>
                            <Col>
                                <h1>{this.state.dog.dogName}</h1>
                                <p>{this.state.dog.discription}</p>
                                <Button variant="success" onClick = {this.updateDogHandler}>Update</Button>
                                <Button variant="danger" onClick={this.deleteDogHandler}>Delete</Button>
                            </Col> */}
                            <DogsContainerInfo
                             image = {this.state.dog.image}
                             dogName = {this.state.dog.dogName}
                             age = {this.state.dog.age}
                             location = {this.state.dog.location}
                             size = {this.state.dog.breedSize}
                             breed = {this.state.dog.breed}
                             discription = {this.state.dog.discription}
                             updateDogHandler = {this.updateDogHandler}
                             deleteDogHandler ={this.deleteDogHandler}
                            />
                        </Row>
                </Container>
            </div>
        )
    }
}


export default DogDetail;