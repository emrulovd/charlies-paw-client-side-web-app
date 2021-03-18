import React from 'react';

import AppDetailsCotainer from './AppDetailsCotainer/AppDetailsCotainer';
import classes from './AppDetails.module.css';

import picture from '../../../assets/main_details_asset.png';
import picture3 from '../../../assets/final_details_assets.png';
import picture2 from '../../../assets/secondary_details_asset.png';
import logo_icon from '../../../assets/logo_icon.png';
import goal_icon from '../../../assets/goal_icon.png';
import future_icon from '../../../assets/future_icon.png';

const appDetails = () => {
    return(
        <div>
            <AppDetailsCotainer pic={picture} icon = {logo_icon} title="Who are we?" index={1}>
                {/* <hr/> */}
                    Charlie's Paw has been working for dogs since January 2014. We bought it as an old cowshed 
                    with the amazing help of tens of thousands of people and after many repairs we turned it 
                    into a place where we can really take care of homeless dogs.
                {/* <hr className={classes.Line}/> */}
                    From the outside we may look like a big organization, but we are a small team of people 
                    who try to work professionally, with a lot of love. Each of the dogs in the shelter is 
                    our friend - with a name and a story. One by one, we have already helped thousands of 
                    unfortunates to change the suffering of the street with a loving home - in the UK and abroad.
            </AppDetailsCotainer>
            <AppDetailsCotainer pic={picture2} icon = {goal_icon} title="Our goal?" index={2}>
                {/* <hr/> */}
                    Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night.
                    Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might.
                    Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue.
                    Ulysses — always fighting all the evil forces bringing peace and justice to all
            </AppDetailsCotainer>
            <AppDetailsCotainer pic={picture3} icon = {future_icon} title="Future for our beloving friends" index={3}>
                {/* <hr/> */}
                    Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night.
                    Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might.
                    Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue.
                    Ulysses — always fighting all the evil forces bringing peace and justice to all
            </AppDetailsCotainer>
        </div>
    )
}

export default appDetails;