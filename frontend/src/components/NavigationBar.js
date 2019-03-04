import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Form, FormGroup, FormFeedback, ListGroup, ListGroupItem } from 'reactstrap';
import { Alert, UncontrolledTooltip } from 'reactstrap';
import '../styles/NavigationBar.css';
import { apiCall } from '../services/api';
import Guest from '../components/Guest';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      invitation: null,
      invitationCode: null,
      modalCode: false,
      modalRsvp: false,
      modalChildren: false,
      invitationCodeInvalid: false,
      invitationCodeError: '',
      rsvpNeedReply: false,
      childrenNeedReply: false,
      alertVisible: false,
      alertColor: '',
      alertMessage: '',
      tooltipOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.collapseNav = this.collapseNav.bind(this);
    this.toggleCode = this.toggleCode.bind(this);
    this.toggleRsvp = this.toggleRsvp.bind(this);
    this.toggleChildren = this.toggleChildren.bind(this);
    this.rsvpOpen = this.rsvpOpen.bind(this);
    this.codeNext = this.codeNext.bind(this);
    this.codeCancel = this.codeCancel.bind(this);
    this.rsvpClick = this.rsvpClick.bind(this);
    this.rsvpCancel = this.rsvpCancel.bind(this);
    this.rsvpBack = this.rsvpBack.bind(this);
    this.childrenSubmit = this.childrenSubmit.bind(this);
    this.childrenCancel = this.childrenCancel.bind(this);
    this.childrenBack = this.childrenBack.bind(this);
    this.dismissAlert = this.dismissAlert.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  collapseNav() {
    this.setState({
      isOpen: false
    });
  }

  toggleCode() {
    this.setState({
      modalCode: !this.state.modalCode
    });
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

  showSubmitAlert(color, message) {
    this.setState({
      alertColor: color,
      alertMessage: message,
      alertVisible: true
    });
  }

  dismissAlert() {
    this.setState({
      alertVisible: false
    });
  }

  toggleTooltip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  rsvpOpen() {
    if (!this.state.invitation) {
      this.toggleCode();
    } else {
      this.toggleRsvp();
    }
  }

  codeNext() {
    if (/^[0-9]{3}$/.test(this.state.invitationCode)) {
      this.getInvitation();
    } else {
      this.codeErrorShow('Invitation Code is a three digit number.');
    }
  }

  codeCancel() {
    this.setState({
      invitationCode: null,
    });
    this.codeErrorClear();
    this.toggleCode();
  }

  codeEnter = event => {
    event.preventDefault();
    this.codeNext();
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
        this.submitInvitation(true);
      }
    } else {
      this.rsvpErrorShow();
    }
  }

  rsvpBack() {
    this.rsvpCancel();
    this.clearInvitation();
    this.toggleCode();
  }

  childrenCancel() {
    this.childrenErrorClear();
    this.toggleChildren();
  }

  childrenSubmit(children) {
    if (this.checkReplies(children)) {
      this.childrenErrorClear();
      this.submitInvitation(false);
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

  getInvitation() {
    apiCall("post", `/api/auth/`, { code: this.state.invitationCode })
      .then(data => {
        this.setState({
          invitation: data
        });
        this.codeErrorClear();
        this.toggleCode();
        this.toggleRsvp();
      })
      .catch(err => {
        this.codeErrorShow(err.message + " If problem persists, email rynocav@gmail.com");
      });
  }

  submitInvitation(rsvp) {
    apiCall("put", `/api/invitation/` + this.state.invitation._id, this.state.invitation)
      .then(data => {
        this.setState({
          invitation: data
        });
        this.showSubmitAlert("success", "Submit successful, thanks for the RSVP!");
        setTimeout(function() {
          this.dismissAlert();
        }.bind(this), 3000);
      })
      .catch(err => {
        this.showSubmitAlert("danger", "Submit failed, try again. If problem persists, send this message to rynocav@gmail.com: " + err.message);
      });
    if (rsvp) {
      this.toggleRsvp();
    } else {
      this.toggleChildren();
    }
  }

  updateAttendence(guest, attendence) {
    guest.attending = attendence;    
  }

  render() {
    const adults = [];
    var adultGuests = [];
    const children = [];
    var childGuests = [];
    if(this.state.invitation) {
      this.state.invitation.guests.forEach(guest => {
        if (guest.isChild) {
          children.push(guest);
        } else {
          adults.push(guest);
        }
      });
    }
    adultGuests = adults.map((adult) => (
      <ListGroupItem key={adult._id}><Guest {...adult} updateYes={this.updateAttendence.bind(this, adult, "yes")} updateNo={this.updateAttendence.bind(this, adult, "no")} /></ListGroupItem>
    ));
    const areChildren = Array.isArray(children) && children.length;
    if (areChildren) {
      childGuests = children.map((child) => (
        <ListGroupItem key={child._id}><Guest {...child} updateYes={this.updateAttendence.bind(this, child, "yes")} updateNo={this.updateAttendence.bind(this, child, "no")} /></ListGroupItem>
      ));
    }

    return (
      <div>
        <Navbar className="fixed-top" color="light" light expand="sm">
          <NavbarBrand tag={Link} to="/">R & J</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar onClick={this.collapseNav}>
              <NavItem>
                <NavLink tag={Link} to="/WeddingDetails/">Wedding Details</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/OurStory/">Our Story</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Accommodations/">Accommodations</NavLink>
              </NavItem>
              <NavItem className="d-sm-none">
                <NavLink tag={Link} to="/BreweryCrawl/">Brewery Crawl</NavLink>
              </NavItem>
              <NavItem className="d-sm-none">
                <NavLink tag={Link} to="/SongRequests/">Song Requests</NavLink>
              </NavItem>
              <NavItem className="d-sm-none">
                <NavLink tag={Link} to="/BridalParty/">Bridal Party</NavLink>
              </NavItem>
              <NavItem className="d-sm-none">
                <NavLink tag={Link} to="/WeddingPhotos/">Wedding Photos</NavLink>
              </NavItem>
              <NavItem className="bg-primary font-weight-bold d-sm-none buttonHover">
                <NavLink className="text-light ml-2" onClick={this.rsvpOpen}>RSVP</NavLink>
              </NavItem>
              <UncontrolledButtonDropdown nav inNavbar className="d-none d-sm-block">
                <DropdownToggle nav caret>More</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink tag={Link} to="/BreweryCrawl/">Brewery Crawl</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink tag={Link} to="/SongRequests/">Song Requests</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink tag={Link} to="/BridalParty/">Bridal Party</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink tag={Link} to="/WeddingPhotos/">Wedding Photos</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
              <NavItem className="bg-primary font-weight-bold ml-1 d-none d-sm-block buttonHover">
                <NavLink className="text-light" onClick={this.rsvpOpen}>RSVP</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
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
          <Modal centered size="lg" isOpen={this.state.modalRsvp} backdrop={"static"}>
            <ModalHeader toggle={this.rsvpCancel}>Attending?</ModalHeader>
            <ModalBody>
              <Alert className="text-center" color="danger" isOpen={this.state.rsvpNeedReply}>Attendence reply required for all guests.</Alert>
              <ListGroup flush>{adultGuests}</ListGroup>
            </ModalBody>
            <ModalFooter>
              <Button size="lg" className="ml-auto" color="secondary" onClick={this.rsvpBack}>Back</Button>
              <Button size="lg" className="mr-auto" color="secondary" onClick={() => this.rsvpClick(areChildren, adults)}>
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
              <Button size="lg" className="mr-auto" color="secondary" onClick={() => this.childrenSubmit(children)}>Submit</Button>
            </ModalFooter>
          </Modal>
          <Alert className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-4 mr-auto ml-auto text-center" color={this.state.alertColor} isOpen={this.state.alertVisible} toggle={this.dismissAlert}>{this.state.alertMessage}</Alert>
      </div>
    );
  }
}

export default NavigationBar;
