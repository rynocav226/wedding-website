import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, FormFeedback } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import ScrollToTop from './components/ScrollToTop';
import NavigationBar from './components/NavigationBar';
import SubmitAlert from './components/SubmitAlert';
import SiteNavigation from './SiteNavigation';
import { apiCall } from './services/api';

class WeddingApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      invitation: null,
      invitationCode: null,
      modalCode: false,
      invitationCodeInvalid: false,
      invitationCodeError: ''
    };

    this.toggleCode = this.toggleCode.bind(this);
    this.codeCancel = this.codeCancel.bind(this);
    this.codeNext = this.codeNext.bind(this);
  }

  toggleCode() {
    this.setState({
      modalCode: !this.state.modalCode
    });
  }

  clearInvitation() {
    this.setState({
      invitation: null,
      invitationCode: null
    });
  }

  codeErrorShow(error) {
    this.setState({
      invitationCodeInvalid: true,
      invitationCodeError: error
    });
  }

  codeErrorClear() {
    this.setState({
      invitationCodeInvalid: false,
      invitationCodeError: ''
    });
  }

  codeNext() {
    if(/^[0-9]{3}$/.test(this.state.invitationCode)) {
      this.getInvitation();
    } else {
      this.codeErrorShow("Invitation Code is a three digit number.");
    }
  }

  codeCancel() {
    this.setState({
      invitationCode: null
    });
    this.codeErrorClear();
    this.toggleCode();
  }

  codeEnter = event => {
    event.preventDefault();
    this.codeNext();
  }

  getInvitation() {
    apiCall("post", `/api/auth/`, { code: this.state.invitationCode })
      .then(data => {
        this.setState({
          invitation: data
        });
        this.codeErrorClear();
        this.toggleCode();
        this.refs.NavigationBar.toggleRsvp();
      })
      .catch(error => {
        if (error.status === 500) {
          this.codeErrorShow("Backend is not running.  Email rynocav@gmail.com to let Ryan know.");
        } else {
          this.codeErrorShow(error.data.error.message + " If problem persists, email rynocav@gmail.com");
        }
      });
  }

  submitInvitation(fromRsvp) {
    apiCall("put", `/api/invitation/` + this.state.invitation._id, this.state.invitation)
      .then(data => {
        this.setState({
          invitation: data
        });
        this.refs.SubmitAlert.showAlert("success", "Submit successful, thanks for the RSVP!", true);
      })
      .catch(error => {
        this.refs.SubmitAlert.showAlert("danger", "Submit failed, try again. If problem persists, send this message to rynocav@gmail.com: " + error.data.error.message, false);
      });
    if (fromRsvp) {
      this.refs.NavigationBar.toggleRsvp();
    } else {
      this.refs.NavigationBar.toggleChildren();
    }
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
        <div>
          <NavigationBar ref="NavigationBar" 
            toggleCode={this.toggleCode.bind(this)}
            invitation={this.state.invitation}
            clearInvitation={this.clearInvitation.bind(this)}
            submitInvitationFromRsvp={this.submitInvitation.bind(this, true)}
            submitInvitationFromChildren={this.submitInvitation.bind(this, false)}
          />
          <SubmitAlert ref="SubmitAlert" />
          <SiteNavigation />
          <Modal centered autoFocus={false} isOpen={this.state.modalCode} backdrop={"static"}>
            <ModalHeader toggle={this.codeCancel}>Enter Invitation Code</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.codeEnter}>
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">#</InputGroupAddon>
                    <Input className={(this.state.invitationCodeInvalid ? "is-invalid": "")} id="code" name="code" autoFocus={true} onChange={e => this.setState({ invitationCode: e.target.value })} autoComplete="off" />
                    <FormFeedback>{this.state.invitationCodeError}</FormFeedback>
                  </InputGroup>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button size="lg" className="mr-auto ml-auto" color="secondary" onClick={this.codeNext}>Next</Button>
            </ModalFooter>
          </Modal>
        </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default WeddingApp;
