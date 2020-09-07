import React, { Component } from 'react';
import { Container, Row, Col, CardGroup, CardColumns } from 'react-bootstrap';
import Tile from '../Tile/Tile';
import './TileView.css';
import reveal from './images/star-wars.jpg';

class TileView extends Component {
  render() {
    return (
      <div class="main" style={{ backgroundImage:`url(${reveal})`,width: `100%`,height: `100%`, backgroundSize: `cover` }} >
        <CardColumns>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
        </CardColumns>
      </div>
    );
  }
}

export default TileView;
