import React from 'react';

import { ListGroup, Col, Row } from 'react-bootstrap';
import Button from '../../../../UI/Button/Button';
import Input from '../../../../UI/Input/Input';
import classes from './AdminUserItem.module.css';

const adminUserItem = (props) => {
    return(
        <div className={classes.Container}>
            { props.role === 'admin'? null
                        :
                <ListGroup.Item>
                    <section>
                            <Row>
                                <Col>
                                    <label>Name:</label>
                                    <h5>{props.name}</h5>
                                </Col>
                                <Col>
                                    <label>Email:</label>
                                    <p>{props.email}</p>    
                                </Col>
                                <Col>
                                    <label>Address:</label>
                                    <p>{props.address}</p>
                                </Col>
                                <Col>
                                    <label>Phone number:</label>
                                    <p>{props.phone_number}</p>
                                </Col>
                                { props.active_role === "admin"? 
                                <form onSubmit={(event) => props.roleRequestSubmitHandler(event, props.user_id)}>
                                    <Col>
                                        <label>Role:</label>
                                        <Input
                                            elementType={props.roleConfig.elementType}
                                            elementConfig={props.roleConfig.elementConfig}
                                            changed = {(event) => props.roleInputHandler(event)}
                                        />
                                    </Col>
                                    <Col>
                                        <Button>Update</Button>
                                    </Col>
                                </form>
                                : 
                                <Col>
                                    <label>Role:</label>
                                    <p>{props.role}</p>
                                </Col>
                                }
                            </Row>
                    </section>
                </ListGroup.Item>
            }
        </div>
    )
}

export default adminUserItem;