import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import ScrollToTop from './components/ScrollToTop';
import SiteNavigation from './SiteNavigation';

const WeddingApp = () => (
  <Router>
    <ScrollToTop>
    <div>
      <NavigationBar />
      <SiteNavigation />
    </div>
    </ScrollToTop>
  </Router>
);

export default WeddingApp;
