import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeddingDetails from './pages/WeddingDetails';
import OurStory from './pages/OurStory';
import Accommodations from './pages/Accommodations';
import BreweryCrawl from './pages/BreweryCrawl';
import Rsvp from './pages/Rsvp';
import SongRequests from './pages/SongRequests';

const SiteNavigation = () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/WeddingDetails" component={WeddingDetails}/>
    <Route exact path="/OurStory" component={OurStory}/>
    <Route exact path="/Accommodations" component={Accommodations}/>
    <Route exact path="/BreweryCrawl" component={BreweryCrawl}/>
    <Route exact path="/Rsvp" component={Rsvp}/>
    <Route exact path="/SongRequests" component={SongRequests}/>
  </Switch>
);

export default SiteNavigation;
