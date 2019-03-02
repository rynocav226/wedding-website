import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeddingDetails from './pages/WeddingDetails';
import OurStory from './pages/OurStory';
import Accommodations from './pages/Accommodations';
import BreweryCrawl from './pages/BreweryCrawl';
import SongRequests from './pages/SongRequests';
import BridalParty from './pages/BridalParty';
import WeddingPhotos from './pages/WeddingPhotos';

const SiteNavigation = props => {
  const { invitationCode } = props;
  return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/WeddingDetails" component={WeddingDetails}/>
        <Route exact path="/OurStory" component={OurStory}/>
        <Route exact path="/Accommodations" component={Accommodations}/>
        <Route exact path="/BreweryCrawl" component={BreweryCrawl}/>
        <Route exact path="/SongRequests" render={props => <SongRequests invitationCode={invitationCode} {...props} />}/>
        <Route exact path="/BridalParty" component={BridalParty}/>
        <Route exact path="/WeddingPhotos" component={WeddingPhotos}/>
      </Switch>
  );
};

export default withRouter(SiteNavigation);
