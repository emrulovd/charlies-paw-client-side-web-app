import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';


import DogsListItem from './Dogs-List-Item/Dogs-List-Item';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../../../UI/Button/Button';
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
                { props.isAuth ? <Button click={addDogHandler} >Add new dog</Button> : null}
                <div>
                <Container fluid >
                    <Row >
                       { props.dogs.map((dog, index) =>{
                                return(
                                    <Col xs lg={6} key={index} >
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

const mapStateToProps = state => {
    return{
        isAuth: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(withRouter(DogsList));