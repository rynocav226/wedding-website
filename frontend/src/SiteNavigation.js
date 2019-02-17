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
    <Route path="/WeddingDetails" component={WeddingDetails}/>
    <Route path="/OurStory" component={OurStory}/>
    <Route path="/Accommodations" component={Accommodations}/>
    <Route path="/BreweryCrawl" component={BreweryCrawl}/>
    <Route path="/Rsvp" component={Rsvp}/>
    <Route path="/SongRequests" component={SongRequests}/>
  </Switch>
);

export default SiteNavigation;
