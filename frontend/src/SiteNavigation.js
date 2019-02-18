import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeddingDetails from './pages/WeddingDetails';
import OurStory from './pages/OurStory';
import Accommodations from './pages/Accommodations';
import BreweryCrawl from './pages/BreweryCrawl';
import SongRequests from './pages/SongRequests';
import BridalParty from './pages/BridalParty';
import WeddingPhotos from './pages/WeddingPhotos';
import Rsvp from './pages/Rsvp';

const SiteNavigation = () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/WeddingDetails" component={WeddingDetails}/>
    <Route path="/OurStory" component={OurStory}/>
    <Route path="/Accommodations" component={Accommodations}/>
    <Route path="/BreweryCrawl" component={BreweryCrawl}/>
    <Route path="/SongRequests" component={SongRequests}/>
    <Route path="/BridalParty" component={BridalParty}/>
    <Route path="/WeddingPhotos" component={WeddingPhotos}/>
    <Route path="/Rsvp" component={Rsvp}/>
  </Switch>
);

export default SiteNavigation;
