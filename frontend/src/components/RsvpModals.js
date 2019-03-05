import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button } from 'reactstrap';
import { Alert, UncontrolledTooltip } from 'reactstrap';
import Guest from '../components/Guest';

class RsvpModals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalRsvp: false,
      modalChildren: false,
      rsvpNeedReply: false,
      childrenNeedReply: false,
      tooltipOpen: false
    };

    this.toggleRsvp = this.toggleRsvp.bind(this);
    this.toggleChildren = this.toggleChildren.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
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

  rsvpCancel() {
    this.rsvpErrorClear();
    this.toggleRsvp();
  }

  rsvpClick(areChildren) {
    if (this.checkReplies(this.props.adults)) {
      this.rsvpErrorClear();
      if (areChildren) {
        this.toggleRsvp();
        this.toggleChildren();
      } else {
        this.props.submitInvitationFromRsvp();
      }
    } else {
      this.rsvpErrorShow();
    }
  }

  rsvpBack() {
    this.rsvpCancel();
    this.props.clearInvitation();
    this.props.toggleCode();
  }

  childrenCancel() {
    this.childrenErrorClear();
    this.toggleChildren();
  }

  childrenSubmit() {
    if (this.checkReplies(this.props.children)) {
      this.childrenErrorClear();
      this.submitInvitationFromChildren();
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

  render() {
    const adultGuests = this.props.adults.map((adult) => (
      <ListGroupItem key={adult._id}><Guest {...adult} updateYes={() => this.props.updateAttendence(adult, "yes")} updateNo={() => this.props.updateAttendence(adult, "no")} /></ListGroupItem>
    ));
    const areChildren = Array.isArray(this.props.children) && this.props.children.length;
    var childGuests = [];
    if (areChildren) {
      childGuests = this.props.children.map((child) => (
        <ListGroupItem key={child._id}><Guest {...child} updateYes={() => this.props.updateAttendence(child, "yes")} updateNo={() => this.props.updateAttendence(child, "no")} /></ListGroupItem>
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
            <Button size="lg" className="mr-auto" color="secondary" onClick={() => this.rsvpClick(areChildren)}>
              {areChildren ? "Next" : "Submit"}
            </Button>
            <span style={{textDecoration: "underline"}} className="text-info" id="tooltipRsvp">Not You?</span>
            <UncontrolledTooltip placement="top-end" target="tooltipRsvp">If invitation code was entered incorrectly, click the 'Back' button to reenter the code. If problem persists, email rynocav@gmail.com</UncontrolledTooltip>
          </ModalFooter>
        </Modal>
        <Modal centered size="lg" isOpen={this.state.modalChildren} backdrop={"static"}>
          <ModalHeader toggle={this.childrenCancel}>Daycare Required?</ModalHeader>
          <ModalBody>
            <Alert className="text-center" color="danger" isOpen={this.state.childrenNeedReply}>Daycare reply required for all children.</Alert>
            <ListGroup flush>{childGuests}</ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button size="lg" className="ml-auto" color="secondary" onClick={this.childrenBack}>Back</Button>
            <Button size="lg" className="mr-auto" color="secondary" onClick={this.childrenSubmit}>Submit</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default RsvpModals;
