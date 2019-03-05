import React, { Component } from 'react';

class SongRequests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //
    };
  }

  componentDidMount() {
    if (!this.props.invitation) {
      this.props.toggleCode();
    }
  }

  render() {
    return (
      <div>{(this.props.invitation) ? "SONG REQUESTS" : "No Code Yet"}</div>
    )
  }
};

export default SongRequests;
