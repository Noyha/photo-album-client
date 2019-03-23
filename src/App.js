import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import PhotoItem from './components/PhotoItem';
import SearchBar from './components/SearchBar';
import UploadPhoto from './components/UploadPhoto';
import './App.css';

import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  state = {
    photos: []
  }

  search = (query) => {
    const BASE_URL = '/api/photos';
    const FETCH_URL = `${BASE_URL}?hashtag=${query}`;
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(photos => {
      this.setState({ photos })
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <Row>
            <Col>
              <SearchBar 
                search={ this.search } 
              />
            </Col>
          </Row>
          <br />
          <Row> 
            { this.state.photos.map((photo, k) => {
              return (
                <Col sm="4" key={ k }>
                  <PhotoItem 
                    photo={ photo } />
                </Col>
              )
            }) }
          </Row>
        </Container>
        <UploadPhoto />
      </div>
    );
  }
}

export default App;
