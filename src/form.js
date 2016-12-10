import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import $ from 'jquery';
import {Button, ButtonToolbar, Form, FormGroup, Col, FormControl, ControlLabel, Checkbox, Row, Grid} from 'react-bootstrap';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:"",
      lastName: "",
      username: "",
      password: "",
      address: "",
      phone: "",
      zipcode: 10001,
      email: ""

    };
  }
  render() {
    return (
      <div className= "signup-container">
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              First Name
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="First Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Last Name
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Last Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              SSN
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="SSN" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Address
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Address" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              City
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="City" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              State Code
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="State Code" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Postal Code
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Postal Code" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Country Code
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Country Code" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              DOB
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="DOB" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Mobile Phone Number
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Mobile Phone Number" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Postal Code
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Postal Code" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Driver License
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Driver License" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Driver License Issue Location
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Driver License Issue Location" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Driver License Issue Date
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Driver License Issue Date" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Driver License Expiration Date
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Driver License Expiration Date" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Third Party User ID
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Third Party User ID" />
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
