import React, { Component } from 'react';
import Aux from '../../Hoc/Aux'
import Classes from "../Layouts/Layout.css";
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDraw from '../Navigation/SideDraw/SideDraw'

class Layout extends Component {
    state = { 
        isShow: false
    }
    handleShow = () => {
        this.setState({
            isShow: false
        })
    }

    toggleShowSideDraw = () => {
        this.setState({
          isShow: true
        });
    }

    render() { 
        return (
          <Aux>
            <Toolbar clickShow={this.toggleShowSideDraw} />
            <SideDraw isShow={this.state.isShow} handleShow={this.handleShow} />
            <main className={Classes.Content}>{this.props.children}</main>
          </Aux>
        );
    }
}
 
export default Layout;
