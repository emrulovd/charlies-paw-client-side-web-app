import React from 'react';

import AppDetailsCotainer from './AppDetailsCotainer/AppDetailsCotainer';

import picture from '../../../assets/main_details_asset.png';
import picture3 from '../../../assets/final_details_assets.png';
import picture2 from '../../../assets/secondary_details_asset.png';
import logo_icon from '../../../assets/logo_icon.png';
import goal_icon from '../../../assets/goal_icon.png';

const appDetails = () => {
    return(
        <div>
            <AppDetailsCotainer pic={picture} icon = {logo_icon} title="Who are we?" index={1}>
                         Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night.
                         Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might.
                         Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue.
                         Ulysses — always fighting all the evil forces bringing peace and justice to all
            </AppDetailsCotainer>
            <AppDetailsCotainer pic={picture2} icon = {goal_icon} title="Our goal?" index={2}>
                         Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night.
                         Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might.
                         Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue.
                         Ulysses — always fighting all the evil forces bringing peace and justice to all
            </AppDetailsCotainer>
            <AppDetailsCotainer pic={picture3} icon = {goal_icon} title="Future?" index={3}>
                         Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night.
                         Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might.
                         Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue.
                         Ulysses — always fighting all the evil forces bringing peace and justice to all
            </AppDetailsCotainer>
        </div>
    )
}

export default appDetails;