import React from 'react';
import { Row, ButtonGroup, Button } from 'reactstrap';

const Guest = ({lastName, firstName}) => (
  <Row>
    <h3>{firstName} {lastName}</h3>
    <ButtonGroup role="group">
      <Button>Yes</Button>
      <Button>No</Button>
    </ButtonGroup>
  </Row>
);

export default Guest;
