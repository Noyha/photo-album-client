import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import SearchBar from './components/main/SearchBar';
import PhotosList from './components/main/photosList/PhotosList';
import UploadPhoto from './components/main/UploadPhoto';
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
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={ UploadPhoto }/>
          <Route path="/search" render={() => (
            <Container>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <SearchBar 
                    search={ this.search } 
                  />
                </Col>
              </Row>
              <br />
              <Row> 
                <PhotosList 
                  photos={ this.state.photos }
                />
              </Row>            
            </Container> 
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
