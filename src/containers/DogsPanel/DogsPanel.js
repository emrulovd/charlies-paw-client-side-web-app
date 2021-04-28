import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import DogsBanner from '../../components/Dogs/DogsBanner/DogsBanner';
import DogsPanelControl from '../../components/Dogs/DogsPanelControl/DogsPanelControl';
import DogsDetail from './DogsDetail/DogsDetail';

class DogsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchedDogs: [],
          modified: false,
          rangeNotValid: true,
          rangeValue: '0',
          search: {
              valid: false,
              value: '',
          },
        }
    }

    componentDidMount(){
        this.props.onFetchDogs();
    }


    rangeInputHandler = (event) => {
        if(!isNaN(event)){
            for(let i in this.props.dogs){
                if(parseInt(this.props.dogs[i].age.split('years').join('')) === parseInt(event)){
                    break;
                }
            }
            this.setState({
                rangeNotValid: false,
                rangeValue: event,
            });
        }
    }

    handleFilterInput = (event) => {
        let newDogs = []
        console.log(event.target.value);
        this.rangeInputHandler(event.target.value)
        if(event.target.checked !== false || this.state.rangeNotValid === false){
            if(this.state.searchedDogs.length === 0){
                for(let index in this.props.dogs){
                    if(this.props.dogs[index].location === event.target.value
                       || this.props.dogs[index].breedSize === event.target.value
                       || parseInt(this.props.dogs[index].age.split('years').join('')) === parseInt(event.target.value)){
                        newDogs.push(this.props.dogs[index])
                    }
                }
                this.setState({
                    searchedDogs: newDogs
                });
            }else{
                for(let index in this.state.searchedDogs){
                    if(this.state.searchedDogs[index].location === event.target.value 
                        || this.state.searchedDogs[index].breed === event.target.value
                        || parseInt(this.props.dogs[index].age.split('years').join('')) === parseInt(event.target.value)){
                        newDogs.push(this.state.searchedDogs[index])
                    }
                }
                this.setState({
                    searchedDogs: newDogs
                });
            }
        }else{
            this.setState({searchedDogs: []});
        }
        if(newDogs.length !== 0){
            this.setState({rangeNotValid: true});
        }
    }

    searchDogHandler = (event) => {
      
      this.setState({
            searchedDogs: this.props.dogs.filter(dog => {
                return dog.breed.toLowerCase().includes(event.target.value.toLowerCase())
            }), 
            search:{
            valid: true
            }
          })  
    }

    render() {           
        const dogsList = () =>{
            if(this.state.searchedDogs.length === 0){
                return this.props.dogs;
            }else{
                return this.state.searchedDogs;
            }
        }

        return(
            <div>
                <Switch>
                    <Route path="/dogs-list/dog-details" exact >
                        <DogsDetail 
                        dogs = {this.props.dogs}
                        history = {this.props.history}
                        location = {this.props.location}/>
                    </Route>
                    <Route path='/' >
                        <Container fluid>
                            <Row>
                                <DogsBanner/>
                            </Row>
                        </Container>
                        <DogsPanelControl
                         searchDogHandler = {this.searchDogHandler}
                         dogsMain ={this.props.dogs}   
                         dogs = {dogsList()}
                         filterInputHandler={this.handleFilterInput}
                         newDogHandler = {this.newDogHandler}
                         rangeValue={this.state.rangeValue}
                         />
                    </Route>
                </Switch>
            </div>

        )
    }   
}


const mapStateToProps = state => {
    return{
        isAuth: state.auth.token !== null,
        dogs: state.dg.dogs
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onFetchDogs: () => dispatch(actions.dogs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogsPanel);