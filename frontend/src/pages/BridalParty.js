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
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/jenniferRobley.jpg")} alt="Jennifer Robley" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Jennifer Robley</CardTitle>
                  <CardText>Jenny is also known as Rev Robes.  She is Jorden’s friend from high school, but they first met when they were the only two girls in a boy baseball league.  Jenny taught Jorden how to golf and was usually a partner in crime up through college graduation when she moved to Montana. Jenny currently lives in Fort Peck, Montana with her boyfriend Sam and cute little doggo Scout.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-md-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/amyAndry.jpg")} alt="Amy Andry" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Amy Andry</CardTitle>
                  <CardText>Amy and Jorden met Freshman year of college and were roommates Sophomore year.  After spending the summer exploring Minneapolis together, they were the best of friends and renamed themselves Thelma and Louise, with the Halloween pictures to prove it.  Amy currently lives in St. Michael, MN with her husband Zach and adorable son James.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-lg-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/saraMichalskiLynch.jpg")} alt="Sara Michalski-Lynch" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Sara Michalski-Lynch</CardTitle>
                  <CardText>Sara and Jorden met while working at General Mills.  Her, Lucy, and Jorden became fast friends going to early morning workouts and traveling for girls’ weekends.  Sara is a world traveler having and has a travel blog coming May 2019.  Sara and her husband Ryan recently moved to St. Louis Park, MN after spending 2 years abroad in London, UK.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-md-none d-lg-block" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/lucyTong.jpg")} alt="Lucy Tong" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Lucy Tong</CardTitle>
                  <CardText>Lucy and Jorden also met while working at General Mills through Lucy’s husband John.  Lucy is always up for an adventure and claims to only wake up for 8 am workout classes with Jorden and Sara.  Lucy is a total foodie, finance whiz, and has quite the artistic side.  Lucy currently lives in Chicago, IL with her husband John.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-lg-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/caitlinSwenson.jpg")} alt="Caitlin Swenson" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Caitlin Swenson</CardTitle>
                  <CardText>Caitlin and Jorden met in college while interning at Target.  Jorden never stopped talking on the walks to the bus and Caitlin finally gave in and admitted she wanted to be friends.  Caitlin is a founding member of the Rainbow Connection softball team and still puts up with Jorden’s excessive need to talk.  Caitlin currently lives in Minneapolis, MN with her husband Matt and tom cat Charlie.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-md-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/callieTaveirne.jpg")} alt="Callie Taveirne" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Callie Taveirne</CardTitle>
                  <CardText>Callie is Jorden's niece.  She is currently a sophomore at Alexandria Area High School where she is on the varsity girls swim and dive team and plays cello in the orchestra.  She is involved in 4-H showing rabbits, training with her dog, and doing lots of projects.  She has even won a few trips to the MN State Fair.  Jorden hopes Callie will be a Gopher in a few years, but until then loves bowling, going to the beach, and hanging out with her.</CardText>
                </CardBody>
              </Card>
            </CardDeck>
          </TabPane>
          <TabPane tabId='2'>
            <CardDeck>
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/pjCavanaugh.jpg")} alt="PJ Cavanaugh" />
                <CardBody>
                  <CardTitle className="text-primary text-center">PJ Cavanaugh</CardTitle>
                  <CardText>PJ is Ryan's younger brother by a little over 3 years. For the most part, they have always gotten along, bonding over a range of interests from the obvious in sports, to academics with coding, to the nerdy, Yu-Gi-Oh!. Today, PJ lives in Minneapolis MN with his wife Allie and their three pets: Lambeau, Ernie, and Sullie.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-md-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/michaelCavanaugh.jpg")} alt="Michael Cavanaugh" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Michael Cavanaugh</CardTitle>
                  <CardText>Michael is Ryan's older brother by 2 1/2 years. Growing up was a constant competition of all things sports.  They tried to beat each other in everything from backyard football, to driveway basketball, and video games too. Today, Michael lives in Caledonia, MS with his wife Lynn and two children: Jack and Audrey.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-lg-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/sethThompson.jpg")} alt="Seth Thompson" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Seth Thompson</CardTitle>
                  <CardText>Ryan and Seth met in middle school when they started playing on the same travel basketball team. They continued teaming up through high school, both on the court, and on the baseball diamond, before their shared college days at the U of M. Today, Seth lives in Eden Prairie, MN with his wife Mollie, son Huxley, and pup Sadie.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-md-none d-lg-block" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/ajButt.jpg")} alt="AJ Butt" />
                <CardBody>
                  <CardTitle className="text-primary text-center">AJ Butt</CardTitle>
                  <CardText>Ryan and AJ met in the 6th grade when they were sat next to each other in computer class. From there, they developed a lasting friendship centered around basketball, video games, and Ryan impersonating an outdoorsman. Today, AJ lives in Gillette, WY with his wife Tiffany and three daughters: Ella, Violet, and Penny.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-lg-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/derekWooters.jpg")} alt="Derek Wooters" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Derek Wooters</CardTitle>
                  <CardText>Ryan and Derek met fresh out of college working together at Unisys. They formed their friendship at the work ping-pong tables, playing together on the Rainbow Connection, and sampling many brews at the local breweries. Today, Derek lives in Durham, NC with his girlfriend Timmiri and new pup Tot.</CardText>
                </CardBody>
              </Card>
              <div className="w-100 d-none d-sm-block d-md-none" />
              <Card outline color="primary" className="mb-2">
                <CardImg className="bridalPartyImage img-fluid" src={require("../assets/bridalParty/alexEllingson.jpg")} alt="Alex Ellingson" />
                <CardBody>
                  <CardTitle className="text-primary text-center">Alex Ellingson</CardTitle>
                  <CardText>Ryan and Alex met during their Freshman year of college and were then roommates for their Sophomore and Junior years. They immediately bonded over Halo, Gopher basketball, and their love of Blake Hoffarber. Today, Alex lives in downtown Minneapolis, MN and is an eligible bachelor.</CardText>
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
