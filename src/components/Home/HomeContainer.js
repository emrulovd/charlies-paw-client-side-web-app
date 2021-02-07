import React from 'react';

import Banner from './Banner/Banner';
import AppDetails from './AppDetails/AppDetails'


const homeContainer = () => {
    return(
        <div>
            <Banner/>
            <AppDetails/>
        </div>
    )
}

export default homeContainer;