import React from 'react';

import Banner from './Banner/Banner';
import MainDetails from './AppDetails/MainDetails'


const homeContainer = () => {
    return(
        <div>
            <Banner/>
            <MainDetails/>
        </div>
    )
}

export default homeContainer;