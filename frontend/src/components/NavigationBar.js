import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Alert, UncontrolledTooltip } from 'reactstrap';
import '../styles/NavigationBar.css';
import Guest from '../components/Guest';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      modalRsvp: false,
      modalChildren: false,
      rsvpNeedReply: false,
      childrenNeedReply: false,
      tooltipOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.collapseNav = this.collapseNav.bind(this);
    this.toggleRsvp = this.toggleRsvp.bind(this);
    this.toggleChildren = this.toggleChildren.bind(this);
    this.rsvpOpen = this.rsvpOpen.bind(this);
    this.rsvpClick = this.rsvpClick.bind(this);
    this.rsvpCancel = this.rsvpCancel.bind(this);
    this.rsvpBack = this.rsvpBack.bind(this);
    this.childrenSubmit = this.childrenSubmit.bind(this);
    this.childrenCancel = this.childrenCancel.bind(this);
    this.childrenBack = this.childrenBack.bind(this);
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

  rsvpOpen() {
    if (!this.props.invitation) {
      this.props.toggleCode();
    } else {
      this.toggleRsvp();
    }
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

  childrenSubmit(children) {
    if (this.checkReplies(children)) {
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

  updateAttendence(guest, attendence) {
    guest.attending = attendence;    
  }

  render() {
    const adults = [];
    var adultGuests = [];
    const children = [];
    var childGuests = [];
    if(this.props.invitation) {
      this.props.invitation.guests.forEach(guest => {
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
      </div>
    );
  }
}

export default NavigationBar;
