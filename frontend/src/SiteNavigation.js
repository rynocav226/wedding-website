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
import WeddingPhotosMN from './pages/WeddingPhotosMN';

const SiteNavigation = (props) => {
  return (
      <Switch>
        <Route exact path="/" render={(routeProps) => <HomePage {...routeProps} toggleCode={props.toggleCodeFromNav} />} />
        <Route exact path="/WeddingDetails" render={(routeProps) => <WeddingDetails {...routeProps} toggleCode={props.toggleCodeFromNav} />} />
        <Route exact path="/OurStory" component={OurStory} />
        <Route exact path="/Accommodations" component={Accommodations} />
        <Route exact path="/BreweryCrawl" component={BreweryCrawl} />
        <Route exact path="/SongRequests" render={(routeProps) => <SongRequests {...routeProps} toggleCode={props.toggleCodeFromSongRequests} invitation={props.invitation} requestId={props.requestId} />} />
        <Route exact path="/BridalParty" component={BridalParty} />
        <Route exact path="/WeddingPhotos" component={WeddingPhotos} />
        <Route exact path="/WeddingPhotosMN" component={WeddingPhotosMN} />
      </Switch>
  );
};

export default SiteNavigation;
