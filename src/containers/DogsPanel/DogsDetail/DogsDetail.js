import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {Container, Row} from 'react-bootstrap';
import classes from './DogsDetail.module.css';

import DogsBanner from '../../../components/Dogs/DogsBanner/DogsBanner';
import DogsContainerInfo from './DogsContainerInfo/DogsContainerInfo';
import DogsDetailAdds from './DogsDetailAdds/DogsDetailAdds';


class DogDetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            dog: [],
            params_id: this.props.location.search.split('?q=').join(''),
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
    updateDetailDogHandler = (id) => {
        this.setState({params_id: id})
        setTimeout(() => {
            this.fetchDog();
        }, 200)
    }

    deleteDogHandler = () => {
      const headers = {
        "Authorization": this.props.token
      }
      axios.delete('http://localhost:8080/dogs/' + this.state.params_id, {
          headers: headers
      })
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
                        <Row>
                            <DogsDetailAdds 
                            dog = {this.state.dog}
                            dogs = {this.props.dogs}
                            history = {this.props.history}
                            updateDetailDogHandler = {this.updateDetailDogHandler}/>
                        </Row>
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

export default connect(mapStateToProps)(DogDetail);