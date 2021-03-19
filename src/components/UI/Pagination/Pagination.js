import React from 'react';
import { Pagination } from 'react-bootstrap';

const pagination = (props) => {
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(props.totalDogs / props.dogsPerPage); i++){
        pageNumber.push(i);
    }

    const pagination = (
        <Pagination>
               {pageNumber.map(number => (
                    <Pagination.Item key={number} onClick={() => props.paginate(number)}>
                        {number}
                    </Pagination.Item>
               ))}
        </Pagination>
    )

    return(
        <div>
            {pagination}
        </div>
    )
}


export default pagination; 