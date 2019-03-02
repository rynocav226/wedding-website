import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Form, FormGroup, FormFeedback } from 'reactstrap';
import '../styles/NavigationBar.css';
import { apiCall } from '../services/api';
import Guest from '../components/Guest';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      modalCode: false,
      modalRsvp: false,
      modalChildren: false,
      invitationCode: null,
      invitationCodeInvalid: false,
      invitationCodeError: '',
      guests: []
    };

    this.toggle = this.toggle.bind(this);
    this.toggleCode = this.toggleCode.bind(this);
    this.toggleCodeNext = this.toggleCodeNext.bind(this);
    this.toggleCodeCancel = this.toggleCodeCancel.bind(this);
    this.toggleRsvp = this.toggleRsvp.bind(this);
    this.toggleRsvpCancel = this.toggleRsvp.bind(this);
    this.toggleChildren = this.toggleChildren.bind(this);
    this.toggleChildrenCancel = this.toggleChildrenCancel.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleCode() {
    if (!this.state.invitationCode) {
      this.setState({
        modalCode: !this.state.modalCode
      });
    } else {
      this.setState({
        modalRsvp: !this.state.modalRsvp
      });
    }
  }

  toggleCodeNext() {
    if (/^[0-9]{3}$/.test(this.state.invitationCode)) {
      this.getInvitation();
    } else {
      this.setState({
        invitationCodeInvalid: true,
        invitationCodeError: 'Invitation Code is a three digit number.'
      });
    }
  }

  toggleCodeCancel() {
    this.setState({
      invitationCode: null,
      invitationCodeInvalid: false,
      modalCode: !this.state.modalCode
    });
  }

  toggleCodeSubmit = event => {
    event.preventDefault();
    this.toggleCodeNext();
  }

  toggleRsvp() {
    this.setState({
      modalRsvp: !this.state.modalRsvp
    });
  }

  toggleRsvpCancel() {
    this.setState({
      modalRsvp: !this.state.modalRsvp
    });
  }

  toggleChildren() {
    this.setState({
      modalChildren: !this.state.modalChildren
    });
  }

  toggleChildrenCancel() {
    this.setState({
      modalChildren: !this.modalChildren
    });
  }

  getInvitation() {
    apiCall("post", `/api/auth/`, { code: this.state.invitationCode })
      .then(data => {
        this.setState({
          guests: data.guests,
          invitationCodeInvalid: false,
          modalCode: !this.state.modalCode,
          modalRsvp: !this.state.modalRsvp
        });
      })
      .catch(err => {
        this.setState({
          invitationCodeInvalid: true,
          invitationCodeError: err.message
        })
      });
  }

  render() {
    const guests = this.state.guests.map((guest) => (
      <Guest key={guest._id} {...guest} />
    ));
    return (
      <Navbar className="fixed-top" color="light" light expand="sm">
        <NavbarBrand tag={Link} to="/">R & J</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
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
              <NavLink className="text-light ml-2" onClick={this.toggleCode}>RSVP</NavLink>
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
              <NavLink className="text-light" onClick={this.toggleCode}>RSVP</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Modal centered size="lg" autoFocus={false} isOpen={this.state.modalCode} backdrop={"static"}>
          <ModalHeader toggle={this.toggleCodeCancel}>Enter Invitation Code</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.toggleCodeSubmit}>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">#</InputGroupAddon>
                  <Input className={(this.state.invitationCodeInvalid ? "is-invalid": "")} id="code" name="code" autoFocus={true} onChange={e => this.setState({ invitationCode: e.target.value })} />
                  <FormFeedback>{this.state.invitationCodeError}</FormFeedback>
                </InputGroup>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button className="mr-auto ml-auto" color="secondary" onClick={this.toggleCodeNext}>Next</Button>
          </ModalFooter>
        </Modal>
        <Modal centered autoFocus size="lg" isOpen={this.state.modalRsvp} backdrop={"static"}>
          <ModalHeader toggle={this.toggleRsvpCancel}>Attending?</ModalHeader>
          <ModalBody>
            {guests}
          </ModalBody>
          <ModalFooter>
            <Button className="mr-auto ml-auto" color="secondary" onClick={this.toggleRsvp}>Next</Button>
          </ModalFooter>
        </Modal>
        <Modal centered autoFocus size="lg" isOpen={this.state.modalChildren} backdrop={"static"}>
          <ModalHeader toggle={this.toggleChildrenCancel}>Daycare Required?</ModalHeader>
          <ModalBody>
            <p>Children go here.</p>
          </ModalBody>
          <ModalFooter>
            <Button className="mr-auto ml-auto" color="secondary" onClick={this.toggleChildren}>Next</Button>
          </ModalFooter>
        </Modal>
      </Navbar>
    );
  }
}

export default NavigationBar;
