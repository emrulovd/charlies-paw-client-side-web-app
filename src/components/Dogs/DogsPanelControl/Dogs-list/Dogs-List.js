import React from 'react';

import DogsListItem from './Dogs-List-Item/Dogs-List-Item';

import ListGroup from 'react-bootstrap/ListGroup'
import classes from './Dogs-List.module.css';

const dogsList = () =>{
    return(
        <div className={classes.Container}>
            <ListGroup variant="flush">
                <DogsListItem
                title="1 Puppy Left! Pure Siberian Husky"
                location=" Birmingham, West Midlands"
                image="https://i.guim.co.uk/img/media/a4840fd090eca923e37526863e3cc586bebff97d/830_508_5593_3356/master/5593.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=335d45c40fa3f7c7564030ebdfc1c7c1"
                content="We have only 1 puppy left out of our litter of 6. The photos have been updated to only show the one remaining puppy. Only 2 female puppies left. One grey with white markings and lovely blue eyes, the other is black with white markings and dark brown eyes. Update 02/02/20"/>
                                <DogsListItem
                title="1 Puppy Left! Pure Siberian Husky"
                location=" Birmingham, West Midlands"
                image="https://www.thesprucepets.com/thmb/HzjkDNlThXjKwP1dcNPL6R-WI8c=/1137x853/smart/filters:no_upscale()/shelter-training-115895910-resized-56a26a8d3df78cf772755f29.jpg"
                content="We have only 1 puppy left out of our litter of 6. The photos have been updated to only show the one remaining puppy. Only 2 female puppies left. One grey with white markings and lovely blue eyes, the other is black with white markings and dark brown eyes. Update 02/02/20" />
                                <DogsListItem
                title="1 Puppy Left! Pure Siberian Husky"
                location=" Birmingham, West Midlands"
                image="https://s3fs.bestfriends.org/s3fs-public/Shelter-dog-Polly-Shelter-11080614_10152907279224234_7833408634371172676_o.jpg"
                content="We have only 1 puppy left out of our litter of 6. The photos have been updated to only show the one remaining puppy. Only 2 female puppies left. One grey with white markings and lovely blue eyes, the other is black with white markings and dark brown eyes. Update 02/02/20"/>
                                <DogsListItem
                title="1 Puppy Left! Pure Siberian Husky"
                location=" Birmingham, West Midlands"
                image="https://www.peta.org/wp-content/uploads/2017/05/iStock_11799314_Story_Stock.jpg"
                content="We have only 1 puppy left out of our litter of 6. The photos have been updated to only show the one remaining puppy. Only 2 female puppies left. One grey with white markings and lovely blue eyes, the other is black with white markings and dark brown eyes. Update 02/02/20"/>
            </ListGroup>
        </div>
    )
}

export default dogsList;