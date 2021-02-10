import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import DogsBanner from '../../components/Dogs/DogsBanner/DogsBanner';
import SearchBar from '../../components/Dogs/SearcBar/SearchBar';
import DogsPanelControl from '../../components/Dogs/DogsPanelControl/DogsPanelControl';


class DogsPanel extends Component {
    
    render() {
        return(
            <div>
                <Container fluid>
                    <Row>
                        <DogsBanner/>
                    </Row>
                </Container>
                <SearchBar/>
                <DogsPanelControl/>
            </div>

        )
    }   
}

export default DogsPanel;