import React from 'react';
import imageLogo from "../../assets/images/burger-logo.png"
import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={imageLogo} alt="this is logo " />
    </div>
)

export default logo