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
        <Col className="col-auto mr-auto">
          <h3 className="text-primary d-none d-lg-block text-monospace mt-auto mb-auto">{this.props.firstName} {this.props.lastName}</h3>
          <h4 className="text-primary d-none d-sm-block d-lg-none text-monospace mt-auto mb-auto">{this.props.firstName} {this.props.lastName}</h4>
          <h5 className="text-primary d-sm-none text-monospace mt-auto mb-auto nameFont">{this.props.firstName} {this.props.lastName}</h5>
        </Col>
        <Col className="col-auto">
          <ButtonGroup className="d-none d-lg-block" role="group">
            <Button size="lg" outline color="success" onClick={() => this.onRadioButtonClick(1)} active={this.state.rSelected === 1}>Yes</Button>
            <Button size="lg" outline color="danger" onClick={() => this.onRadioButtonClick(2)} active={this.state.rSelected === 2}>No</Button>
          </ButtonGroup>
          <ButtonGroup className="d-none d-sm-block d-lg-none" role="group">
            <Button outline color="success" onClick={() => this.onRadioButtonClick(1)} active={this.state.rSelected === 1}>Yes</Button>
            <Button outline color="danger" onClick={() => this.onRadioButtonClick(2)} active={this.state.rSelected === 2}>No</Button>
          </ButtonGroup>
          <ButtonGroup className="d-sm-none" role="group">
            <Button size="sm" outline color="success" onClick={() => this.onRadioButtonClick(1)} active={this.state.rSelected === 1}>Yes</Button>
            <Button size="sm" outline color="danger" onClick={() => this.onRadioButtonClick(2)} active={this.state.rSelected === 2}>No</Button>
          </ButtonGroup>
        </Col>
      </Row>
    );
  }
}

export default Guest;
