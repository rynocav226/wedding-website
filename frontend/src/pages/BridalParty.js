import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { TabContent, TabPane } from 'reactstrap';
import { CardDeck, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';
import "../styles/BridalParty.css";

class BridalParty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
      window.scrollTo(0,0);
    }
  }

  render() {
    return (
      <Container>
        <Nav pills style={{zIndex: '2'}} className="bridalPartyNav bg-secondary justify-content-center" role="navigation">
          <NavItem className="bridalPartyNavItem text-primary">
            <NavLink className={classnames("bridalLink", {active: this.state.activeTab === '1'})} onClick={() => { this.toggle('1'); }}>
              Bridesmaids
            </NavLink>
          </NavItem>
          <NavItem className="bridalPartyNavItem text-primary">
            <NavLink className={classnames("bridalLink", {active: this.state.activeTab === '2'})} onClick={() => { this.toggle('2'); }}>
              Groomsmen
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent style={{paddingTop: '40px', zIndex: '1'}} activeTab={this.state.activeTab}>
          <TabPane tabId='1'>
            <CardDeck>
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/amyAndry.jpg")} alt="Amy Andry" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Amy Andry</CardTitle>
                  <CardText>Jorden and Caitlin met at their internship at Target.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-md-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/danielleManthei.jpg")} alt="Danielle Manthei" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Danielle Manthei</CardTitle>
                  <CardText>Jorden and Caitlin met at their internship at Target.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-lg-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/saraMichalskiLynch.jpg")} alt="Sara Michalski-Lynch" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Sara Michalski-Lynch</CardTitle>
                  <CardText>Jorden and Caitlin met at their internship at Target.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-md-none d-lg-block" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/jenniferRobley.jpg")} alt="Jennifer Robley" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Jennifer Robley</CardTitle>
                  <CardText>Jorden and Caitlin met at their internship at Target.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-lg-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/caitlinSwenson.jpg")} alt="Caitlin Swenson" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Caitlin Swenson</CardTitle>
                  <CardText>Jorden and Caitlin met at their internship at Target.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-md-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/saraMichalskiLynch.jpg")} alt="Lucy Tong" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Lucy Tong</CardTitle>
                  <CardText>Jorden and Caitlin met at their internship at Target.</CardText>
                </CardBody>
              </Card>
            </CardDeck>
          </TabPane>
          <TabPane tabId='2'>
          <CardDeck>
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/ajButt.jpg")} alt="AJ Butt" />
                <CardBody>
                  <CardTitle className="text-primary text-center">AJ Butt</CardTitle>
                  <CardText>Jorden and Caitlin met at their internship at Target.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-md-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/michaelCavanaugh.jpg")} alt="Michael Cavanaugh" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Michael Cavanaugh</CardTitle>
                  <CardText>Jorden and Caitlin met at their internship at Target.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-lg-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/pjCavanaugh.jpg")} alt="PJ Cavanaugh" />
                <CardBody>
                  <CardTitle className="text-primary text-center">PJ Cavanaugh</CardTitle>
                  <CardText>Jorden and Caitlin met at their internship at Target.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-md-none d-lg-block" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/alexEllingson.jpg")} alt="Alex Ellingson" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Alex Ellingson</CardTitle>
                  <CardText>Jorden and Caitlin met at their internship at Target.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-lg-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/sethThompson.jpg")} alt="Seth Thompson" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Seth Thompson</CardTitle>
                  <CardText>Jorden and Caitlin met at their internship at Target.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-md-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/derekWooters.jpg")} alt="Derek Wooters" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Derek Wooters</CardTitle>
                  <CardText>Jorden and Caitlin met at their internship at Target.</CardText>
                </CardBody>
              </Card>
            </CardDeck>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
};

export default BridalParty;
