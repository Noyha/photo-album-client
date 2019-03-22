import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import PhotoItem from './components/PhotoItem';
import SearchBar from './components/SearchBar';
import UploadPhoto from './components/UploadPhoto';
import './App.css';

import { Container, Row, Col } from 'reactstrap';

import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class App extends Component {
  state = {
    photos: [],
    query: ''
  }

  search() {
    const BASE_URL = '/api/photos';
    const FETCH_URL = `${BASE_URL}?hashtag=${this.state.query}`;
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
              <InputGroup>
                <Input 
                  placeholder="Search hashtag..."
                  value={this.state.query}
                  onChange={event => { this.setState({ query: event.target.value }) }}
                  onKeyPress={event => {
                    if(event.key === 'Enter') {
                      this.search()
                    }
                  }} 
                />
                <InputGroupAddon addonType="append">
                  <Button onClick={() => this.search()} color="secondary">Search!</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
          <br />
          <Row> 
            {this.state.photos.map(photo => {
              return (
                <Col sm="4">
                  <PhotoItem 
                    photo={ photo } />
                </Col>
              )
            })}
          </Row>
        </Container>
        <UploadPhoto />
      </div>
    );
  }
}

export default App;
