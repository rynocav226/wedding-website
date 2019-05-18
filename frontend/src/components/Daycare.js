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

  createButton(index) {
    return <Button key={index} outline color="primary" onClick={() => this.onRadioButtonClick(index + 1)} active={this.state.rSelected === index + 1}>{index}</Button>
  }

  createButtonLarge(index) {
    return <Button key={index} size="lg" outline color="primary" onClick={() => this.onRadioButtonClick(index + 1)} active={this.state.rSelected === index + 1}>{index}</Button>
  }

  render() {
    var daycareButtonsLarge = [];
    var daycareButtons = [];

    for (var i = 0; i <= this.props.children; i++) {
      daycareButtonsLarge.push(this.createButtonLarge(i));
      daycareButtons.push(this.createButton(i));
    }
    
    return (
      <Row className="mt-2">
        <Col xs="12" sm="auto" className="col-auto mr-auto numberColumn">
          <h3 className="text-primary d-none d-lg-block text-monospace mt-auto mb-auto">Number of children:</h3>
          <h5 className="text-primary d-lg-none text-monospace mt-auto mb-auto">Number of children:</h5>
        </Col>
        <Col xs="12" sm="auto" className="col-auto numberColumn">
          <ButtonGroup className="d-none d-lg-block" role="group">{daycareButtonsLarge}</ButtonGroup>
          <ButtonGroup className="d-lg-none" role="group">{daycareButtons}</ButtonGroup>
        </Col>
      </Row>
    );
  }
}

export default Daycare;
