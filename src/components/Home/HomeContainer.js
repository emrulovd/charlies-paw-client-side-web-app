import React from 'react';

import Banner from './Banner/Banner';
import AppDetails from './AppDetails/AppDetails'
import HomeFooter from './HomeFooter/HomeFooter'


const homeContainer = () => {
    return(
        <div>
            <Banner/>
            <AppDetails/>
            <HomeFooter/>
        </div>
    )
}

export default homeContainer;