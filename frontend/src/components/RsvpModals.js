import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button, Input } from 'reactstrap';
import { Alert, UncontrolledTooltip } from 'reactstrap';
import Guest from '../components/Guest';
import Daycare from '../components/Daycare';
import { apiCall } from '../services/api';

class RsvpModals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adults: [],
      responded: false,
      children: 0,
      daycare: 0,
      allergies: "",
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

  populateGuests(data) {
    this.setState({
      adults: data.adults,
      responded: data.responded,
      children: data.children,
      daycare: data.daycare,
      allergies: data.allergies
    });
  }

  clearGuests() {
    this.setState({
      adults: [],
      responded: false,
      children: 0,
      daycare: 0,
      allergies: ""
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

  rsvpClick() {
    if (this.checkReplies()) {
      this.rsvpErrorClear();
      if (this.state.children > 0) {
        this.toggleRsvp();
        this.toggleChildren();
      } else {
        this.submitGuestInfo(true);
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

  rsvpKeyUp(keyPress, ignoreEnter) {
    var code = keyPress.keyCode || keyPress.which;
    if (code === 13 && !ignoreEnter) {
      this.rsvpClick();
      return;
    }
    if (code === 27) {
      this.rsvpCancel();
      return;
    }
  }

  childrenCancel() {
    this.childrenErrorClear();
    this.toggleChildren();
  }

  childrenSubmit() {
    if (this.checkReplies()) {
      this.childrenErrorClear();
      this.submitGuestInfo(false);
    } else {
      this.childrenErrorShow();
    }
  }

  childrenBack() {
    this.childrenCancel();
    this.toggleRsvp();
  }

  childrenKeyUp(keyPress) {
    var code = keyPress.keyCode || keyPress.which;
    if (code === 27) {
      this.childrenCancel();
      return;
    }
  }

  checkReplies() {
    var allReplied = true;
    this.state.adults.forEach(adult => {
      if (adult.attending === "null") {
        allReplied = false;
      }
    });
    return allReplied;
  }

  getGuestInfo() {
    if (!this.props.guestInfo) {
      this.props.showAlert("danger", "Guest list does not exist for this invitation code.  Email Ryan at rynocav@gmail.com to let him know.");
      this.props.clearInvitation();
      return;
    }
    apiCall("get", `/api/invitation/` + this.props.invitation + `/guest/` + this.props.guestInfo)
      .then(data => {
        this.populateGuests(data);
        this.toggleRsvp();
      })
      .catch(error => {
        this.props.showAlert("danger", "Unabled to retrieve guest list from the database.  If problem persists, send this message to rynocav@gmail.com: " + error.message, false);
        this.props.clearInvitation();
      })
  }

  submitGuestInfo(fromRsvp) {
    apiCall("put", `/api/invitation/` + this.props.invitation + `/guest/` + this.props.guestInfo,
      {
        "adults": this.state.adults,
        "responded": true,
        "daycare": this.state.daycare,
        "allergies": this.state.allergies
      })
      .then(data => {
        this.populateGuests(data);
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

  updateDaycare(daycare) {
    this.setState({
      daycare: daycare
    });
  }

  updateAllergies(allergies) {
    this.setState({
      allergies: allergies
    });
  }

  render() {
    const adultGuests = this.state.adults.map((adult) => (
      <ListGroupItem key={adult._id} onKeyUp={e => this.rsvpKeyUp(e, true)}><Guest {...adult} updateAttendence={(attendence) => this.updateAttendence(adult, attendence)} /></ListGroupItem>
    ));

    return (
      <div>
        <Modal centered size="lg" isOpen={this.state.modalRsvp} backdrop={"static"}>
          <ModalHeader toggle={this.rsvpCancel} onKeyUp={e => this.rsvpKeyUp(e, true)}>Attending?</ModalHeader>
          <ModalBody>
            <Alert className="text-center" color="danger" isOpen={this.state.rsvpNeedReply}>Attendence reply required for all guests.</Alert>
            <ListGroup flush>
              {adultGuests}
              <ListGroupItem key="allergies" onKeyUp={e => this.rsvpKeyUp(e, false)}>
                <label htmlFor="allergies">Any allergies or food restrictions for any guests?</label>
                <Input id="allergies" name="allergies" value={this.state.allergies} onChange={e => this.updateAllergies(e.target.value)} autoComplete="off" />
              </ListGroupItem>
            </ListGroup>
          </ModalBody>
          <ModalFooter onKeyUp={e => this.rsvpKeyUp(e, true)}>
            <Button size="lg" className="ml-auto" color="secondary" onClick={this.rsvpBack}>Back</Button>
            <Button size="lg" className="mr-auto" color="secondary" onClick={this.rsvpClick}>
              {this.state.children > 0 ? "Next" : "Submit"}
            </Button>
            <span style={{textDecoration: "underline"}} className="text-info" id="tooltipRsvp">Not You?</span>
            <UncontrolledTooltip placement="top-end" target="tooltipRsvp">If invitation code was entered incorrectly, click the 'Back' button to reenter the code. If problem persists, email rynocav@gmail.com</UncontrolledTooltip>
          </ModalFooter>
        </Modal>
        <Modal centered size="lg" isOpen={this.state.modalChildren} backdrop={"static"} onKeyUp={e => this.childrenKeyUp(e)}>
          <ModalHeader toggle={this.childrenCancel}>Babysitter Required?</ModalHeader>
          <ModalBody>
            <Alert className="text-center" color="danger" isOpen={this.state.childrenNeedReply}>Select number of children.</Alert>
            <ListGroup flush>
              <ListGroupItem key="description">
                <p>Due to the size of the venue, we are requesting an adults only reception.  If you are unable to make arrangements, child care and dinner will be provided in the suite of the Courtyard Marriott Hotel.  If you have any questions or concerns, reach out to us at rynocav@gmail.com.</p>
              </ListGroupItem>
              <ListGroupItem key={this.state.children}>
                <Daycare children={this.state.children} daycare={this.state.daycare} updateDaycare={(daycare) => this.updateDaycare(daycare)} />
              </ListGroupItem>
            </ListGroup>
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
