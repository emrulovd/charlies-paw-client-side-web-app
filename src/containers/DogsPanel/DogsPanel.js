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

    render() {
        return(
            <div>
                <Container fluid>
                    <Row>
                        <DogsBanner/>
                    </Row>
                </Container>
                <SearchBar/>
                {/* { this.state.dogs.map((dog, index) => ( <p key={index}>{dog.dogName}</p>))} */}
                <DogsPanelControl dogs = {this.state.dogs}/>
            </div>

        )
    }   
}

export default DogsPanel;