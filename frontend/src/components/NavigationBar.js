import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className="fixed-top" color="light" light expand="sm">
        <NavbarBrand href="/">R & J</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/WeddingDetails/">Wedding Details</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/OurStory/">Our Story</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Accommodations/">Accommodations</NavLink>
            </NavItem>
            <NavItem className="d-sm-none">
              <NavLink href="/BreweryCrawl/">Brewery Crawl</NavLink>
            </NavItem>
            <NavItem className="d-sm-none">
              <NavLink href="/SongRequests/">Song Requests</NavLink>
            </NavItem>
            <NavItem className="d-sm-none">
              <NavLink href="/BridalParty/">Bridal Party</NavLink>
            </NavItem>
            <NavItem className="d-sm-none">
              <NavLink href="/WeddingPhotos/">Wedding Photos</NavLink>
            </NavItem>
            <NavItem className="bg-primary font-weight-bold d-sm-none">
              <NavLink className="text-light ml-2" href="/Rsvp/">RSVP</NavLink>
            </NavItem>
            <UncontrolledButtonDropdown nav inNavbar className="d-none d-sm-block">
              <DropdownToggle nav caret>More</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/BreweryCrawl/">Brewery Crawl</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/SongRequests/">Song Requests</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/BridalParty/">Bridal Party</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/WeddingPhotos/">Wedding Photos</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <NavItem className="bg-primary font-weight-bold ml-1 d-none d-sm-block">
              <NavLink className="text-light" href="/Rsvp/">RSVP</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;

/*
            <NavItem>
              <NavLink href="/BreweryCrawl/">Brewery Crawl</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/SongRequests/">Song Requests</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/BridalParty/">Bridal Party</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/WeddingPhotos/">Wedding Photos</NavLink>
            </NavItem>
*/
