import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Row, Col, Grid, Panel } from 'react-bootstrap';
import classnames from 'classnames';
import { Button } from 'bulma-react'

class App extends Component {
  render() {
    return (

      <div className="App">
          <h1 className="dash"> DASHBOARD </h1>
          <div className="desc"> View Your Budget Categories </div>
          <br />
        <div className="body">
          <Navbar className="nav">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Savr</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="/#/">Profile</NavItem>
              <NavItem eventKey={2} href="/#/search">Recommendations</NavItem>
            </Nav>
          </Navbar>
          <img src="https://support.sas.com/kb/40/addl/fusion_40176_1_g40176.gif" alt="Paris" width="400" height="300"/>
            <div className="panels">
              <Panel className="panel" header="Recent Expenses">
                Panel content
              </Panel>
              <Panel className="panel2" header="Recent Transactions">
                transaction content
              </Panel>
            </div>
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
