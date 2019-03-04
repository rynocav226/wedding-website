import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class SubmitAlert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alertVisible: false,
      alertColor: '',
      alertMessage: ''
    };

    this.dismissAlert = this.dismissAlert.bind(this);
  }

  dismissAlert() {
    this.setState({
      alertVisible: false
    });
  }

  showAlert(color, message, autoDismiss) {
    this.setState({
      alertColor: color,
      alertMessage: message,
      alertVisible: true
    });
    if (autoDismiss) {
      setTimeout(function() {
        this.dismissAlert();
      }.bind(this), 3000);
    }
  }

  render() {
    return (
      <Alert
          className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-4 mr-auto ml-auto text-center"
          color={this.state.alertColor}
          isOpen={this.state.alertVisible}
          toggle={this.dismissAlert}>
        {this.state.alertMessage}
      </Alert>
    );
  }
}

export default SubmitAlert;
