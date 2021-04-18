import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {Container, Row} from 'react-bootstrap';
import classes from './DogsDetail.module.css';

import DogsBanner from '../../../components/Dogs/DogsBanner/DogsBanner';
import DogsContainerInfo from './DogsContainerInfo/DogsContainerInfo';
import DogsDetailAdds from './DogsDetailAdds/DogsDetailAdds';
import * as actions from '../../../store/actions/index';


class DogDetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            dog: [],
            params_id: this.props.location.search.split('?q=').join(''),
            favourites: false
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

    addToFavourites = () => {
        const favouritesForm = {
            dogID: this.state.dog.id,
            dogName: this.state.dog.dogName,
            age: this.state.dog.age,
            location: this.state.dog.location,
            size: this.state.dog.breedSize,
            breed: this.state.dog.breed,
            image: this.state.dog.image,
            discription: this.state.dog.discription,
            userID: this.props.userId 
        }
        this.props.onAddToFavourites( favouritesForm );
        this.setState({favourites: true});
    }

    onContinueHandler = () => {
        this.setState({favourites: false});
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
                             favourites = {this.state.favourites}
                             userRole = {this.props.userRole}
                             history = {this.props.history}
                             updateDogHandler = {this.updateDogHandler}
                             addToFavourites = {this.addToFavourites}
                             onContinueHandler = {this.onContinueHandler}
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

const mapDispatchToProps = dispatch => {
    return{
        onAddToFavourites: (userID) => dispatch(actions.addFavourites(userID))
    }
}

const mapStateToProps = state => {
    return{
        token: state.auth.token,
        userId: state.auth.userId,
        userRole: state.auth.role
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogDetail);