import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem, Row, Col, Grid } from 'react-bootstrap';
import classnames from 'classnames';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
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
        <Grid>
          {/* <Row className="show-grid">
            <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
          </Row> */}

          <Row className="show-grid">
            <Col className="panel_2" md={6} mdPush={6}> Content Panel 2</Col>
            <Col className="panel_1" md={6} mdPull={6}> Content Panel 1</Col>
          </Row>
          <Row className="show-grid">
            <Col xs={6} md={4}></Col>
            <Col className="panel_3"xs={6} md={4}>Content Panel 3</Col>
            <Col xsHidden md={4}></Col>
          </Row>
        </Grid>
        <div className="panel_4"> Content Panel 3</div>
        <div className="panel_5"> Content Panel 4</div>
        <div className="panel_6"> Content Panel 5</div>
      </div>
    );
  }
}

export default App;
