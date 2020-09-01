import React from 'react';
import classes from './NavItems.css'
import NavItem from './NavItem/NavItem'

const navItems = () => {
    return (
      <ul className={classes.NavigationItems}>
        <NavItem exact link="/">
          Burger Builder
        </NavItem>
        <NavItem link="/order">Order</NavItem>
        <NavItem link="/auth">Authentication</NavItem>
      </ul>
    );
}

export default navItems