import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, FormFeedback } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import ScrollToTop from './components/ScrollToTop';
import NavigationBar from './components/NavigationBar';
import SubmitAlert from './components/SubmitAlert';
import SiteNavigation from './SiteNavigation';
import RsvpModals from './components/RsvpModals';
import { apiCall } from './services/api';

class WeddingApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      invitation: null,
      invitationCode: null,
      modalCode: false,
      toggleCodeFromRsvp: false,
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

  toggleCodeFromNav() {
    if (this.state.invitation) {
      this.refs.RsvpModals.toggleRsvpCheck();
    } else {
      this.setState({
        toggleCodeFromNav: true
      });
      this.toggleCode();
    }
  }

  toggleCodeFromSongRequests() {
    this.setState({
      toggleCodeFromNav: false
    });
    this.toggleCode();
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
        if(this.state.toggleCodeFromNav) {
          this.refs.RsvpModals.toggleRsvpCheck();
        }
      })
      .catch(error => {
        if (error.status === 500) {
          this.codeErrorShow("Backend is not running.  Email rynocav@gmail.com to let Ryan know.");
        } else {
          this.codeErrorShow(error.data.error.message + " If problem persists, email rynocav@gmail.com");
        }
      });
  }

  guestsUpdateSuccessful(invitation) {
    this.setState({
      invitation: invitation
    });
    this.refs.SubmitAlert.showAlert("success", "Submit successful, thanks for the RSVP!", true);
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <NavigationBar 
              toggleCode={this.toggleCodeFromNav.bind(this)}
            />
            <SubmitAlert ref="SubmitAlert" />
            <SiteNavigation
              toggleCodeFromNav={this.toggleCodeFromNav.bind(this)}
              toggleCodeFromSongRequests={this.toggleCodeFromSongRequests.bind(this)}
              invitation={(this.state.invitation) ? this.state.invitation._id : null}
            />
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
            <RsvpModals ref="RsvpModals"
              toggleCode={this.toggleCode}
              invitation={(this.state.invitation) ? this.state.invitation._id : null}
              clearInvitation={this.clearInvitation.bind(this)}
              showAlert={(color, message, timeout) => this.refs.SubmitAlert.showAlert(color, message, timeout)}
            />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default WeddingApp;
