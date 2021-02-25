import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import DogsBanner from '../../components/Dogs/DogsBanner/DogsBanner';
import SearchBar from '../../components/Dogs/SearcBar/SearchBar';
import DogsPanelControl from '../../components/Dogs/DogsPanelControl/DogsPanelControl';
import DogsDetail from './DogsDetail/DogsDetail';
import DogsEdit from './Dogs-edit/Dogs-Edit';

class DogsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dogsLenght: null,
          dogs: [],
          searchedDogs: [],
          filteredDogs: [],
          newDog: false,
          modified: false,
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
        if(this.state.dogs.length !== this.state.dogsLenght){ // fetches the data after a dog was deleted 
            this.fetchData();
            this.setState({dogsLenght: this.state.dogs.length})
        }
        if(this.state.modified){ // fetches the data after a dog is added or updated 
            this.fetchData();
            this.setState({modified: false});
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

    newDogHandler = (modified) => {
        this.setState({modified: modified})
        this.props.history.push('/dogs-list');
    }


    dogsDetailHandlerData = (params_id) => {
        if(this.state.search.valid){
            for(let index in this.state.searchedDogs){
                if(this.state.searchedDogs[index].id === parseInt(params_id)){
                    return this.state.searchedDogs[index];
                }
            }
        }else{
            for(let index in this.state.dogs){
                if(this.state.dogs[index].id === parseInt(params_id)){
                    return this.state.dogs[index];
                }else{
                    console.log('Error');
                }
            }
        }
    }

    handleFilterInput = (event) => {
        console.log(event.target.value);
        let newDogs = []
        if(event.target.value !== null){
            for(let index in this.state.dogs){
                if(this.state.dogs[index].location === event.target.value || this.state.dogs[index].breed === event.target.value){
                    newDogs.push(this.state.dogs[index])
                }
            }
            this.setState({filteredDogs: newDogs});
            console.log(this.state.filteredDogs)
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


    deleteDogHandler = (params_id) => {
        let id = ''; 
        let newDogs = [];
        for(let index in this.state.dogs){
            if(this.state.dogs[index].id === parseInt(params_id)){
                id = this.state.dogs[index]._id;
                newDogs = this.state.dogs.slice(0, index);
                break; 
            }
        }
        this.setState({dogs: newDogs});
        axios.delete('http://localhost:8080/dogs/' + id )
            .then(res => {
                console.log(res.data.message);
            })
        this.props.history.push('/dogs-list');
    }


    render() {           
        const dogsList = () =>{
            if(this.state.searchedDogs.length === 0){
                if(this.state.filteredDogs.length !== 0){
                    return this.state.filteredDogs;
                }else{
                    return this.state.dogs
                }
            }
            else{
                return this.state.searchedDogs;
            }
        }

        return(
            <div>
                <Switch>
                    <Route path='/dogs-list/edit-dog' 
                    exact component={() => <DogsEdit
                    dogs = {this.state.dogs}
                    newDogHandler ={this.newDogHandler}
                    createDog = {this.CreateDog}
                    params_id = {this.props.location.search.split('?q=').join('')}/>}></Route>
                    <Route path="/dogs-list/dog-details" exact >
                        <DogsDetail 
                        dogsDetailHandlerData = {this.dogsDetailHandlerData} 
                        deleteHandler = {this.deleteDogHandler}
                        params_id = {this.props.location.search.split('?q=').join('')}
                        history = {this.props.history}/>
                    </Route>
                    <Route path='/' >
                        <Container fluid>
                            <Row>
                                <DogsBanner/>
                            </Row>
                        </Container>
                        <SearchBar searchValue = {this.searchDogHandler}/>
                        <DogsPanelControl
                         dogsMain ={this.state.dogs}   
                         dogs = {dogsList()}
                         filterInputHandler={this.handleFilterInput}
                         newDogHandler = {this.newDogHandler}
                         />
                    </Route>
                </Switch>
            </div>

        )
    }   
}

export default DogsPanel;