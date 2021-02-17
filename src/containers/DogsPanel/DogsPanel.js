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
          search: {
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
        for( let index in this.state.dogs){
            console.log(index);
            if(this.state.dogs[index].breed === this.state.search.value){
                newDogs.push(this.state.dogs[index]);
            }
        }
        let updatedDogs = {
            ...this.state.dogs
        }
        updatedDogs = newDogs;
        this.setState({searchedDogs: updatedDogs})
    }

    searchDogHandler = (event) => {
            const updatedSearch = {
                ...this.state.search
            }
            const updatedSearchValue = event.target.value;
            updatedSearch.value = updatedSearchValue;
            this.setState({search: {
                value: updatedSearch.value
            }})
    }


    // searchDogHandler = (event) => {
    //     if(event.target.value === undefined){
    //         console.log('Two way');
    //     }else{
    //         console.log('One way')
    //     }
    // }

    detailPageHandler = () => {
        this.props.history.push('/dogs-list/details')
        console.log(this.props)
    }

    render() {  
        return(
            <div>
                <Switch>
                    <Route path="/dogs-list/details" exact component={DogsDetail}/>
                    <Route path='/' >
                        <Container fluid>
                            <Row>
                                <DogsBanner/>
                            </Row>
                        </Container>
                        {/* <SearchBar search = {this.searchDogHandler}/> */}
                        <SearchBar searchValue = {this.searchDogHandler} search = {this.newSearchDogHandler}/>
                        {/* { this.state.dogs.map((dog, index) => ( <p key={index}>{dog.dogName}</p>))} */}
                        <DogsPanelControl dogs = { this.state.searchedDogs.length === 0? this.state.dogs : this.state.searchedDogs} click={this.detailPageHandler}/>
                    </Route>
                </Switch>
            </div>

        )
    }   
}

export default DogsPanel;