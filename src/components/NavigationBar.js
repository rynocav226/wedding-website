import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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

  /* using reacstrap */
  render() {
    return (
      <Navbar className="fixed-top" color="light" light expand="md">
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
            <NavItem>
              <NavLink href="/BreweryCrawl/">Brewery Crawl</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Rsvp/">RSVP</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/SongRequests/">Song Requests</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }

  /* using normal bootstrap
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#site-navigation" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="site-navigation">
            <ul className="nav navbar-nav">
              <li className="active"><NavLink exact to="/">Home <span className="sr-only">(current)</span></NavLink></li>
              <li><NavLink exact to="/WeddingDetails">Wedding Details</NavLink></li>
              <li><NavLink exact to="/OurStory">Our Story</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }*/
}

export default NavigationBar;
