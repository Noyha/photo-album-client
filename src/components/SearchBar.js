import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const SearchBar = (props) => {
  return (
    <div>
      <InputGroup>
        <Input
          placeholder="Search hashtag..." />
        <InputGroupAddon addonType="append">
          <Button color="secondary">Search!</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default SearchBar;