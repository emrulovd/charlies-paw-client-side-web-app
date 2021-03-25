import React from 'react';

import { ListGroup } from 'react-bootstrap';
import AdminUserItem from './AdminUserItem/AdminUserItem';

const adminUserItems = (props) => {
    return(
        <div>
            <ListGroup variant="flush">
                {
                    props.users.map((user, index) => {
                        return(
                            <AdminUserItem
                                key={index}
                                user_id = {user._id}
                                name={user.name}
                                email={user.email}
                                phone_number = {user.phone_number}
                                address={user.address}
                                role={user.role}
                                roleConfig = {props.roleConfig}
                                roleInputHandler = {props.roleInputHandler}
                                roleRequestSubmitHandler = {props.roleRequestSubmitHandler}
                            />
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}

export default adminUserItems;