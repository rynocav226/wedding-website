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
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/lucyTong.jpg")} alt="Lucy Tong" />
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
                  <CardText>Ryan and AJ met in the 6th grade when they were sat next to each other in computer class.  From there, they developed a lasting friendship centered around basketball, video games, and Ryan impersonating an outdoorsman.  Today, AJ lives in Gillette WY with his wife Tiffany and three daughters: Ella, ??, and Violet.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-md-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/michaelCavanaugh.jpg")} alt="Michael Cavanaugh" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Michael Cavanaugh</CardTitle>
                  <CardText>Michael is Ryan's older brother by 2 1/2 years.  Growing up was a constant competition of alll things sport; from backyard football, to driveway basketball, to the video game console.  Today, Michael lives in Caledonia MS with his wife Lynn and two children: Jack and Audrey.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-lg-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/pjCavanaugh.jpg")} alt="PJ Cavanaugh" />
                <CardBody>
                  <CardTitle className="text-primary text-center">PJ Cavanaugh</CardTitle>
                  <CardText>PJ is Ryan's younger brother by a little over 3 years.  For the most part, they have always gotten along, bonding over a range of interests from the obvious, sports, to the acedemic, coding, to the nerdy, Yu-Gi-Oh!.  Today, PJ lives in Minneapolis MN with his wife Allie and their three pets.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-md-none d-lg-block" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/alexEllingson.jpg")} alt="Alex Ellingson" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Alex Ellingson</CardTitle>
                  <CardText>Ryan and Alex met during their Freshman year of college and were then roommates for their Sophmore and Junior years.  They immediately bonded over Halo, Gopher basketball, and their love of Blake Hoffarber.  Today, Alex lives in downtown Minneapolis MN and is an eligible bachelor.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-lg-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/sethThompson.jpg")} alt="Seth Thompson" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Seth Thompson</CardTitle>
                  <CardText>Ryan and Seth met in middle school when they started playing on the same travel basketball team.  They continued teaming up through high school, both on the court, and on the diamond, before their shared college days at the U of M.  Today, Seth lives in Eden Praire MN with his wife Mollie and son Huxley.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-md-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/derekWooters.jpg")} alt="Derek Wooters" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Derek Wooters</CardTitle>
                  <CardText>Ryan and Derek met fresh out of college working together at Unisys.  They formed their friendship at the work ping-pong tables, playing together on the Rainbow Connection, and sampling many brews at the local breweries.  Today, Derek lives in Durham NC with his girlfriend Timirri and new pup Tot.</CardText>
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
