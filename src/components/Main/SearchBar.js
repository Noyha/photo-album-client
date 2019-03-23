import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class SearchBar extends Component {
  state = {
    query: ''
  };

  onInputChange = (e) => this.setState({ query: e.target.value });

  onSearchClick = (e) => {
    this.props.search(this.state.query);
  }

  onEnterPress = (e) => {
    if(e.key === 'Enter') {
      this.props.search(this.state.query);
    }
  }
  
  render() {
    return (
      <div>
        <InputGroup>
          <Input 
            placeholder="Search for hashtag..."
            value={ this.state.query }
            onChange={ this.onInputChange } 
            onKeyPress={ this.onEnterPress } 
          />
          <InputGroupAddon addonType="append">
            <Button onClick={ this.onSearchClick } color="dark" className="silver-color silver-border">Search!</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
};

export default SearchBar;