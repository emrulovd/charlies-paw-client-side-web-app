import React from 'react';

import classes from './Banner.module.css';
import {Parallax} from 'react-parallax';
import background from '../../../assets/background_back.png'; // change the name
// import sky from '../../../assets/sky.png';
import people from '../../../assets/people.png'
import grass from '../../../assets/grass.png'


const Banner = () => {

    return(
        <Parallax  bgImage={background} strength={200} >
            <Parallax bgImage={people} strength={50}>
                <Parallax bgImage={grass} strength={-100}>
                    <div className = {classes.Banner}>
                            <h1>Life is better when you're not alone!</h1>
                            <h2>Open your home and your heart</h2>
                    </div>
                </Parallax>
            </Parallax>
        </Parallax>
    )
}

export default Banner;