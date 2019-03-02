import React from 'react';

const SongRequests = ({ invitationCode }) => {
  if (invitationCode) {
    return (
      <div>SONG REQUESTS</div>
    );
  }
  return (
    <div>No code entered yet</div>
  );
};

export default SongRequests;
