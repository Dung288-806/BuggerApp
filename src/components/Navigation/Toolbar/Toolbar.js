import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
const toolbar = (props) => {
    return (
      <header className={classes.Toolbar}>
        <div onClick={props.clickShow} className={classes.DrawerToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
          <NavItems />
        </nav>
      </header>
    );
}

export default toolbar