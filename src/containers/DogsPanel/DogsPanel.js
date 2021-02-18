import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import DogsBanner from '../../components/Dogs/DogsBanner/DogsBanner';
import SearchBar from '../../components/Dogs/SearcBar/SearchBar';
import DogsPanelControl from '../../components/Dogs/DogsPanelControl/DogsPanelControl';
import DogsDetail from '../../components/Dogs/DogsDetail/DogsDetail';

class DogsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dogs: [],
          searchedDogs: [],
          filteredDogs: [],
          search: {
              valid: false,
              value: '',
          },
        }
    }

    componentDidMount(){
        this.fetchData();
    }
    
    async fetchData() {
        axios.get('http://localhost:8080/dogs')
            .then(res => {
                const data = res.data
                console.log(data.message);
                this.setState({dogs: data.dogs});
            });
    }

    dogsDetailHandlerData = (params_id) => {
        if(this.state.search.valid){
            for(let index in this.state.searchedDogs){
                if(index === params_id){
                    console.log('searched')
                    return this.state.searchedDogs[index];
                }
            }
        }else{
            for(let index in this.state.dogs){
                if(index === params_id){
                    console.log('!searched')
                    return this.state.dogs[index];
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

    render() {           
        const dogsList = () =>{
            if(this.state.searchedDogs.length === 0){
                console.log('first')
                if(this.state.filteredDogs.length !== 0){
                    console.log('second')
                    return this.state.filteredDogs;
                }else{
                    console.log('done')
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
                    <Route path="/dogs-list/dog-details" exact >
                        <DogsDetail details = {this.dogsDetailHandlerData}/>
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
                         />
                    </Route>
                </Switch>
            </div>

        )
    }   
}

export default DogsPanel;