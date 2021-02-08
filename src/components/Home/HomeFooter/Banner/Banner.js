import React from 'react';

import classes from './Banner.module.css'
import Button from 'react-bootstrap/Button';

const banner = () => {
    return(
        <div className={classes.Banner}>
            <div className={classes.Border}>
                <div className={classes.Inner}>
                    <p>
                        Feed a friend at the shelter
                    </p>
                    <Button>See more</Button>
                </div>
            </div>
        </div>
    )
}


export default banner;