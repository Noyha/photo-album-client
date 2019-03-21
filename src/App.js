import React, { Component } from 'react';
import NavBar from './components/header/NavBar';
import PhotoItem from './components/PhotoItem';
import SearchBar from './components/SearchBar';
import './App.css';

import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  state = {
    photos: [
      { id: 1, desc: 'had so much fun in TLV party', imgPath: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180', tags: ['party', 'fun'] },
      { id: 2, desc: 'my loveeee', imgPath: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180', tags: ['love', 'heart'] },
      { id: 3, desc: 'the perfect place', imgPath: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180', tags: ['beach', 'sun', 'fun'] }
    ]
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <Row>
            <Col>
              <SearchBar />
            </Col>
          </Row>
          <br />
          <Row> 
            {this.state.photos.map(photo => {
              return (
                <Col sm="4">
                  <PhotoItem photo={photo}/>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
