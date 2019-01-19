import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import SiteNavigation from './SiteNavigation';

class WeddingApp extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <SiteNavigation/>
      </div>
    );
  }
}

export default WeddingApp;
