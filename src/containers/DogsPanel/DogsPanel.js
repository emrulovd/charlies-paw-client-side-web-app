import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import DogsBanner from '../../components/Dogs/DogsBanner/DogsBanner';
import DogsPanelControl from '../../components/Dogs/DogsPanelControl/DogsPanelControl';
import DogsDetail from './DogsDetail/DogsDetail';
import DogsEdit from './Dogs-edit/Dogs-Edit';

class DogsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dogs: [],
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
        this.fetchData();
    }

    componentDidUpdate(){
        if(this.state.modified){ // fetches the data after a dog is added or updated 
           this.setState({modified: !this.state.modified});
           setTimeout(() => { // Delay the fetch to prevent from racing
                this.fetchData();
           }, 100) 
        }
    }
    
    async fetchData() { // fetch dogs data
        axios.get('http://localhost:8080/dogs')
            .then(res => {
                const data = res.data
                console.log(data.message);
                this.setState({
                    dogsLenght: data.dogs.length,
                    dogs: data.dogs
                });
            });
    }

    updateDogHandler = () => {
        this.setState({modified: true})
        this.props.history.push('/dogs-list');
    }

    rangeInputHandler = (event) => {
        if(!isNaN(event)){
            for(let i in this.state.dogs){
                if(parseInt(this.state.dogs[i].age.split('years').join('')) === parseInt(event)){
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
        this.rangeInputHandler(event.target.value)
        if(event.target.checked !== false || this.state.rangeNotValid === false){
            if(this.state.searchedDogs.length === 0){
                for(let index in this.state.dogs){
                    if(this.state.dogs[index].location === event.target.value
                       || this.state.dogs[index].breed === event.target.value
                       || parseInt(this.state.dogs[index].age.split('years').join('')) === parseInt(event.target.value)){
                        newDogs.push(this.state.dogs[index])
                    }
                }
                this.setState({
                    searchedDogs: newDogs
                });
            }else{
                for(let index in this.state.searchedDogs){
                    if(this.state.searchedDogs[index].location === event.target.value 
                        || this.state.searchedDogs[index].breed === event.target.value
                        || parseInt(this.state.dogs[index].age.split('years').join('')) === parseInt(event.target.value)){
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
            searchedDogs: this.state.dogs.filter(dog => {
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
                return this.state.dogs;
            }else{
                return this.state.searchedDogs;
            }
        }

        return(
            <div>
                <Switch>
                    { this.props.isAuth ?
                        <Route path='/dogs-list/edit-dog' 
                        exact component={() => <DogsEdit
                        dogs = {this.state.dogs}
                        updateDogHandler ={this.updateDogHandler}
                        params_id = {this.props.location.search.split('?q=').join('')}/>}></Route>
                        :
                        null
                    }
                    <Route path="/dogs-list/dog-details" exact >
                        <DogsDetail 
                        dogs = {this.state.dogs}
                        updateDogHandler = {this.updateDogHandler}
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
                         dogsMain ={this.state.dogs}   
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
        isAuth: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(DogsPanel);