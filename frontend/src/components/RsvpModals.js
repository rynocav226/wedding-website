import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button } from 'reactstrap';
import { Alert, UncontrolledTooltip } from 'reactstrap';
import Guest from '../components/Guest';
import { apiCall } from '../services/api';

class RsvpModals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: null,
      modalRsvp: false,
      modalChildren: false,
      rsvpNeedReply: false,
      childrenNeedReply: false,
      tooltipOpen: false
    };

    this.toggleRsvp = this.toggleRsvp.bind(this);
    this.toggleChildren = this.toggleChildren.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.toggleRsvpCheck = this.toggleRsvpCheck.bind(this);
    this.rsvpClick = this.rsvpClick.bind(this);
    this.rsvpCancel = this.rsvpCancel.bind(this);
    this.rsvpBack = this.rsvpBack.bind(this);
    this.childrenSubmit = this.childrenSubmit.bind(this);
    this.childrenCancel = this.childrenCancel.bind(this);
    this.childrenBack = this.childrenBack.bind(this);
  }

  toggleRsvp() {
    this.setState({
      modalRsvp: !this.state.modalRsvp
    });
  }

  toggleChildren() {
    this.setState({
      modalChildren: !this.state.modalChildren
    });
  }

  clearGuests() {
    this.setState({
      guests: null
    });
  }

  rsvpErrorShow() {
    this.setState({
      rsvpNeedReply: true
    });
  }

  rsvpErrorClear() {
    this.setState({
      rsvpNeedReply: false
    });
  }

  childrenErrorShow() {
    this.setState({
      childrenNeedReply: true
    });
  }

  childrenErrorClear() {
    this.setState({
      childrenNeedReply: false
    });
  }

  toggleTooltip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  toggleRsvpCheck() {
    if(!this.state.guests) {
      this.getGuests();
    }
    this.toggleRsvp();
  }

  rsvpCancel() {
    this.rsvpErrorClear();
    this.toggleRsvp();
  }

  rsvpClick(areChildren, adults) {
    if (this.checkReplies(adults)) {
      this.rsvpErrorClear();
      if (areChildren) {
        this.toggleRsvp();
        this.toggleChildren();
      } else {
        this.submitGuests(true);
      }
    } else {
      this.rsvpErrorShow();
    }
  }

  rsvpBack() {
    this.clearGuests();
    this.rsvpCancel();
    this.props.clearInvitation();
    this.props.toggleCode();
  }

  childrenCancel() {
    this.childrenErrorClear();
    this.toggleChildren();
  }

  childrenSubmit(children) {
    if (this.checkReplies(children)) {
      this.childrenErrorClear();
      this.submitGuests(false);
    } else {
      this.childrenErrorShow();
    }
  }

  childrenBack() {
    this.childrenCancel();
    this.toggleRsvp();
  }

  checkReplies(guests) {
    var allReplied = true;
    guests.forEach(guest => {
      if (guest.attending === "null") {
        allReplied = false;
      }
    });
    return allReplied;
  }

  getGuests() {
    apiCall("get", `/api/invitation/` + this.props.invitation + `/guest/`)
      .then(data => {
        this.setState({
          guests: data
        });
      })
      .catch(error => {
        this.props.showAlert("danger", "Unabled to retrieve guest list from the database.  If problem persists, send this message to rynocav@gmail.com: " + error.message, false);
      })
  }

  submitGuests(fromRsvp) {
    apiCall("put", `/api/invitation/` + this.props.invitation + `/guest`, this.state.guests)
      .then(data => {
        this.setState({
          guests:data.guests
        });
        this.props.showAlert("success", "Submit was successful, thanks for the RSVP!", true);
      })
      .catch(error => {
        this.props.showAlert("danger", "Submit failed, try again. If problem persists, send this message to rynocav@gmail.com: " + error.message, false);
      });
      if (fromRsvp) {
        this.toggleRsvp();
      } else {
        this.toggleChildren();
      }
      window.scrollTo(0, 0);
  }

  updateAttendence(guest, attendence) {
    guest.attending = attendence;    
  }

  render() {
    const adults = [];
    const children = [];
    if (this.state.guests) {
      this.state.guests.forEach(guest => {
        if (guest.isChild) {
          children.push(guest);
        } else {
          adults.push(guest);
        }
      });
    }

    const adultGuests = adults.map((adult) => (
      <ListGroupItem key={adult._id}><Guest {...adult} updateAttendence={(attendence) => this.updateAttendence(adult, attendence)} /></ListGroupItem>
    ));
    var childGuests = [];
    if (children.length) {
      childGuests = children.map((child) => (
        <ListGroupItem key={child._id}><Guest {...child} updateAttendence={(attendence) => this.updateAttendence(child, attendence)} /></ListGroupItem>
      ));
    }

    return (
      <div>
        <Modal centered size="lg" isOpen={this.state.modalRsvp} backdrop={"static"}>
          <ModalHeader toggle={this.rsvpCancel}>Attending?</ModalHeader>
          <ModalBody>
            <Alert className="text-center" color="danger" isOpen={this.state.rsvpNeedReply}>Attendence reply required for all guests.</Alert>
            <ListGroup flush>{adultGuests}</ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button size="lg" className="ml-auto" color="secondary" onClick={this.rsvpBack}>Back</Button>
            <Button size="lg" className="mr-auto" color="secondary" onClick={() => this.rsvpClick(children.length, adults)}>
              {children.length ? "Next" : "Submit"}
            </Button>
            <span style={{textDecoration: "underline"}} className="text-info" id="tooltipRsvp">Not You?</span>
            <UncontrolledTooltip placement="top-end" target="tooltipRsvp">If invitation code was entered incorrectly, click the 'Back' button to reenter the code. If problem persists, email rynocav@gmail.com</UncontrolledTooltip>
          </ModalFooter>
        </Modal>
        <Modal centered size="lg" isOpen={this.state.modalChildren} backdrop={"static"}>
          <ModalHeader toggle={this.childrenCancel}>Babysitter Required?</ModalHeader>
          <ModalBody>
            <Alert className="text-center" color="danger" isOpen={this.state.childrenNeedReply}>Daycare reply required for all children.</Alert>
            <ListGroup flush>{childGuests}</ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button size="lg" className="ml-auto" color="secondary" onClick={this.childrenBack}>Back</Button>
            <Button size="lg" className="mr-auto" color="secondary" onClick={() => this.childrenSubmit(children)}>Submit</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default RsvpModals;
