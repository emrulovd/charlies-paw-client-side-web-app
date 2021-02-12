import React, { Component } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import DogsBanner from '../../components/Dogs/DogsBanner/DogsBanner';
import SearchBar from '../../components/Dogs/SearcBar/SearchBar';
import DogsPanelControl from '../../components/Dogs/DogsPanelControl/DogsPanelControl';


class DogsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dogs: [],
          searchedDogs: [],
          search: {
              valid: false,
              value: '',
          }
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

    newSearchDogHandler = (event) =>{
        const newDogs = [];
        for( let dog in this.state.dogs){
            if(this.state.dogs[dog].breed === this.state.search.value){
                newDogs.push(this.state.dogs[dog]);
            }
        }
        let updatedDogs = {
            ...this.state.dogs
        }
        updatedDogs = newDogs;
        this.setState({searchedDogs: updatedDogs})
        console.log(this.state.dogs[0]);
    }

    searchDogHandler = (event) => {
        const updatedSearch = {
            ...this.state.search
        }
        const updatedSearchValue = event.target.value;
        updatedSearch.value = updatedSearchValue;
        this.setState({search: {
            valid: true,
            value: updatedSearch.value
        }})
    }

    render() {
        return(
            <div>
                <Container fluid>
                    <Row>
                        <DogsBanner/>
                    </Row>
                </Container>
                <SearchBar searchValue = {this.searchDogHandler} search = {this.newSearchDogHandler}/>
                {/* { this.state.dogs.map((dog, index) => ( <p key={index}>{dog.dogName}</p>))} */}
                <DogsPanelControl dogs = { this.state.searchedDogs.length === 0? this.state.dogs : this.state.searchedDogs}/>
            </div>

        )
    }   
}

export default DogsPanel;