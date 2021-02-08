import React from 'react';

import classes from './Banner.module.css';
import {Parallax} from 'react-parallax';
// import background from '../../../assets/banner_background.png';
import sky from '../../../assets/sky.png';
import people from '../../../assets/people.png'
import grass from '../../../assets/grass.png'


const Banner = () => {
    // const [offsetY, setOffsetY] = useState(0);

    // const handleScroll = () => {
    //     return setOffsetY(window.pageYOffset);
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);

    //     return window.removeEventListener('scroll', handleScroll);
    // },[])

    return(
        <Parallax  bgImage={sky} strength={150} >
            <Parallax bgImage={people} strength={150}>
                <Parallax bgImage={grass} strength={0}>
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