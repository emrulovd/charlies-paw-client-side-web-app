import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './AppDetailsCotainer.module.css';


const appDetailsConatainer = (props) =>{
    if(props.index !== 2){
        return(
            <div className={classes.Container}>
            <Container fluid>
                    <Row>
                            <img className={classes.Pic} src={props.pic} alt="shelter dog"/>
                            <Col>
                                <img src={props.icon} className={classes.Icon} alt="icon"/>
                                <h1>{props.title}</h1>
                                <p>{props.children}</p>
                            </Col>
                    </Row>
                </Container>
            </div>  
        )
    }else{
        return(
        <div className={classes.Container}>           
            <Container fluid>
                <Row>
                    <Col>
                        <img src={props.icon} className={classes.Icon} alt="icon"/>
                        <h1>{props.title}</h1>
                        <p>{props.children}</p>
                    </Col>  
                    <img className={classes.Pic} src={props.pic} alt="shelter dog"/>
                </Row>
           </Container>
        </div>
        )
    }
}


export default  appDetailsConatainer;