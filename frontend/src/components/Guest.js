import React, { Component } from 'react';
import { Row, Col, ButtonGroup, Button } from 'reactstrap';
import "../styles/Guest.css";

class Guest extends Component {
  constructor (props) {
    super(props);

    this.state = {
      rSelected: (props.attending === "yes") ? 1 : (props.attending === "no") ? 2 : null 
    };

    this.onRadioButtonClick = this.onRadioButtonClick.bind(this);
  }

  onRadioButtonClick(rSelected) {
    this.setState({
      rSelected: rSelected
    });
    if (rSelected === 1) {
      this.props.updateAttendence("yes");
    } else {
      this.props.updateAttendence("no");
    }
  }

  render() {
    return (
      <Row className="mt-2">
        <Col xs="12" sm="auto" className="col-auto mr-auto guestColumn">
          <h3 className="text-primary d-none d-lg-block text-monospace mt-auto mb-auto">{this.props.firstName} {this.props.lastName}</h3>
          <h4 className="text-primary d-lg-none text-monospace mt-auto mb-auto">{this.props.firstName} {this.props.lastName}</h4>
        </Col>
        <Col xs="12" sm="auto" className="col-auto guestColumn">
          <ButtonGroup className="d-none d-lg-block" role="group">
            <Button size="lg" outline color="success" onClick={() => this.onRadioButtonClick(1)} active={this.state.rSelected === 1}>Yes</Button>
            <Button size="lg" outline color="danger" onClick={() => this.onRadioButtonClick(2)} active={this.state.rSelected === 2}>No</Button>
          </ButtonGroup>
          <ButtonGroup className="d-lg-none" role="group">
            <Button outline color="success" onClick={() => this.onRadioButtonClick(1)} active={this.state.rSelected === 1}>Yes</Button>
            <Button outline color="danger" onClick={() => this.onRadioButtonClick(2)} active={this.state.rSelected === 2}>No</Button>
          </ButtonGroup>
        </Col>
      </Row>
    );
  }
}

export default Guest;
