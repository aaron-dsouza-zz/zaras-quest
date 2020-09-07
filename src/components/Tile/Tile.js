import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import rainbow from '../../images/true.png';

class Tile extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      solved: true
    };
  }

  solve() {
    this.state.solved = true;
  }

  render() {
    const visibility = this.state.solved?'hidden':'visible';
    return (
      <Card style={{ width: '30rem', visibility: {visibility} }}>
        <Card.Img variant="top" src={rainbow} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary" onClick={this.solve()}>Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Tile;
