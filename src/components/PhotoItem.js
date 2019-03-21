import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class PhotoItem extends Component {
  render() {
    const { id, desc, imgPath, tags } = this.props.photo;
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={imgPath} alt="photo" />
          <CardBody>
            <CardText>{desc}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default PhotoItem;
