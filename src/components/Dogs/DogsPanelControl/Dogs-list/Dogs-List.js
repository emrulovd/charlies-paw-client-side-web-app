import React from 'react';
import { withRouter} from 'react-router-dom';

import DogsListItem from './Dogs-List-Item/Dogs-List-Item';


import { Button, Container, Row, Col } from 'react-bootstrap'
import classes from './Dogs-List.module.css';

const DogsList = (props) =>{

    const addDogHandler = () => {
        props.history.replace('/dogs-list/edit-dog');
    }

    const detailDogPageHandler = (id) => {
        props.history.push(`/dogs-list/dog-details?q=${id}`)
    }

    return(
        <div className={classes.Container}>
                <Button primary="true" onClick={addDogHandler}>Add new dog</Button>
                {/* <ListGroup variant="flush" horizontal>
                    <Container fluid>
                        {
                            props.dogs.map((dog, index) =>{
                                return(
                                    <DogsListItem
                                    key={index}
                                    title={dog.dogName}
                                    location={dog.location}
                                    image={dog.image}
                                    content={dog.discription}
                                    id={dog.id}
                                    detailDogPageHandler = {detailDogPageHandler}
                                    />
                                )
                            })
                        }
                    </Container>
                </ListGroup> */}
                <div>
                <Container fluid >
                    <Row>
                       { props.dogs.map((dog, index) =>{
                                return(
                                    <Col sm={6} key={index}>
                                        <DogsListItem
                                        title={dog.dogName}
                                        location={dog.location}
                                        image={dog.image}
                                        age={dog.age}
                                        content={dog.discription}
                                        id={dog.id}
                                        detailDogPageHandler = {detailDogPageHandler}
                                        />
                                    </Col>
                                )
                            })}
                    </Row>
                </Container>
                </div>
        </div>
    )
}

export default withRouter(DogsList);