import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../styles/NavigationBar.css';

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
            <NavItem className="bg-primary font-weight-bold d-sm-none">
              <NavLink className="text-light ml-2" tag={Link} to="/Rsvp/">RSVP</NavLink>
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
            <NavItem className="bg-primary font-weight-bold ml-1 d-none d-sm-block">
              <NavLink className="text-light" tag={Link} to="/Rsvp/">RSVP</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
