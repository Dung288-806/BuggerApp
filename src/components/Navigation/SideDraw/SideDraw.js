import React, {useState} from 'react';
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import classes from './SideDraw.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../Hoc/Aux'

const sideDraw = (props) => {

    let classOfSide = [classes.SideDrawer, classes.Close];
    if (props.isShow) {
        classOfSide = [classes.SideDrawer, classes.Open];
    }
    return (
      <Aux>
        <Backdrop isShow={props.isShow} clickToggle={props.handleShow} />
        <div className={classOfSide.join(' ')}>
          <div className={classes.Logo}>
            <Logo />
          </div>
          <nav>
            <NavItems />
          </nav>
        </div>
      </Aux>
    );
}

export default sideDraw