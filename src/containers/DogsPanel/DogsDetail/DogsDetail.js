import React, {Component} from 'react';

import {Container, Row, Col, Button} from 'react-bootstrap';
import classes from './DogsDetail.module.css';

import DogsBanner from '../../../components/Dogs/DogsBanner/DogsBanner';


class DogDetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            dog: this.props.dogsDetailHandlerData(this.props.params_id)
        }
    }
    componentDidMount(){
        
    }

    updateDogHandler = () => {
        console.log(this.props);
        this.props.history.replace(`/dogs-list/edit-dog?q=${this.props.params_id}`);
    }

    render(){
        return(
            <div>
                <DogsBanner/>
                <Container fluid className={classes.Container}>
                        <Row>
                            <Col>
                                <img src={this.state.dog.image} alt='dog'/>
                            </Col>
                            <Col>
                                <h1>{this.state.dog.dogName}</h1>
                                <p>{this.state.dog.discription}</p>
                                <Button variant="success" onClick = {this.updateDogHandler}>Update</Button>
                                <Button variant="danger" onClick={() => this.props.deleteHandler(this.props.params_id)}>Delete</Button>
                            </Col>
                        </Row>
                </Container>
            </div>
        )
    }
}


export default DogDetail;