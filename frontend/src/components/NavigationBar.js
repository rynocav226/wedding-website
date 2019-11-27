import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../styles/NavigationBar.css';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.collapseNav = this.collapseNav.bind(this);
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

  render() {
    return (
      <Navbar className="fixed-top" color="light" light expand="sm">
        <NavbarBrand tag={Link} to="/"><img src={require("../assets/navIcon.png")} className="navIcon img-fluid" alt="R & J" /></NavbarBrand>
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
            <NavItem className="d-sm-none d-md-block">
              <NavLink tag={Link} to="/BreweryCrawl/">Brewery Crawl</NavLink>
            </NavItem>
            <NavItem className="d-sm-none d-lg-block">
              <NavLink tag={Link} to="/SongRequests/">Song Requests</NavLink>
            </NavItem>
            <NavItem className="d-sm-none d-xl-block">
              <NavLink tag={Link} to="/BridalParty/">Bridal Party</NavLink>
            </NavItem>
            <NavItem className="d-sm-none d-xl-block">
              <NavLink tag={Link} to="/WeddingPhotos/">Wedding Photos SC</NavLink>
            </NavItem>
            <NavItem className="d-sm-none d-xl-block">
              <NavLink tag={Link} to="/WeddingPhotosMN/">Wedding Photos MN</NavLink>
            </NavItem>
            <NavItem className="bg-primary font-weight-bold d-sm-none buttonHover">
              <NavLink className="text-light ml-2" onClick={this.props.toggleCode}>RSVP</NavLink>
            </NavItem>
            <UncontrolledButtonDropdown nav inNavbar className="d-none d-sm-block d-xl-none">
              <DropdownToggle nav caret>More</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="d-md-none">
                  <NavLink tag={Link} to="/BreweryCrawl/">Brewery Crawl</NavLink>
                </DropdownItem>
                <DropdownItem className="d-lg-none">
                  <NavLink tag={Link} to="/SongRequests/">Song Requests</NavLink>
                </DropdownItem>
                <DropdownItem className="d-xl-none">
                  <NavLink tag={Link} to="/BridalParty/">Bridal Party</NavLink>
                </DropdownItem>
                <DropdownItem className="d-xl-none">
                  <NavLink tag={Link} to="/WeddingPhotos/">Wedding Photos SC</NavLink>
                </DropdownItem>
                <DropdownItem className="d-xl-none">
                  <NavLink tag={Link} to="/WeddingPhotosMN/">Wedding Photos MN</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <NavItem className="bg-primary font-weight-bold ml-1 d-none d-sm-block buttonHover">
              <NavLink className="text-light" onClick={this.props.toggleCode}>RSVP</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
