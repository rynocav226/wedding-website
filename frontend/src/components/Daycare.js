import React, { Component } from 'react';
import { Row, Col, ButtonGroup, Button } from 'reactstrap';
import "../styles/Daycare.css";

class Daycare extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rSelected: props.daycare + 1
    };

    this.onRadioButtonClick = this.onRadioButtonClick.bind(this);
  }

  onRadioButtonClick(rSelected) {
    this.setState({
      rSelected: rSelected
    });
    this.props.updateDaycare(rSelected - 1);
  }

  createButtonSmall(index) {
    return <Button key={index} size="sm" outline color="primary" onClick={() => this.onRadioButtonClick(index + 1)} active={this.state.rSelected === index + 1}>{index}</Button>
  }

  createButton(index) {
    return <Button key={index} outline color="primary" onClick={() => this.onRadioButtonClick(index + 1)} active={this.state.rSelected === index + 1}>{index}</Button>
  }

  createButtonLarge(index) {
    return <Button key={index} size="lg" outline color="primary" onClick={() => this.onRadioButtonClick(index + 1)} active={this.state.rSelected === index + 1}>{index}</Button>
  }

  render() {
    var daycareButtonsLarge = [];
    var daycareButtons = [];
    var daycareButtonsSmall = [];

    for (var i = 0; i <= this.props.children; i++) {
      daycareButtonsLarge.push(this.createButtonLarge(i));
      daycareButtons.push(this.createButton(i));
      daycareButtonsSmall.push(this.createButtonSmall(i));
    }
    
    return (
      <Row className="mt-2">
        <Col className="col-auto mr-auto">
          <h3 className="text-primary d-none d-lg-block text-monospace mt-auto mb-auto">Number of children:</h3>
          <h5 className="text-primary d-none d-sm-block d-lg-none text-monospace mt-auto mb-auto">Number of children:</h5>
          <h6 className="text-primary d-sm-none text-monospace mt-auto mb-auto numberFont">Number of children:</h6>
        </Col>
        <Col className="col-auto">
          <ButtonGroup className="d-none d-lg-block" role="group">{daycareButtonsLarge}</ButtonGroup>
          <ButtonGroup className="d-none d-sm-block d-lg-none" role="group">{daycareButtons}</ButtonGroup>
          <ButtonGroup className="d-sm-none" role="group">{daycareButtonsSmall}</ButtonGroup>
        </Col>
      </Row>
    );
  }
}

export default Daycare;
