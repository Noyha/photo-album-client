import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

class PhotoItem extends Component {
  render() {
    const photo = this.props.photo !== null ? this.props.photo : null;
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={photo.path} alt="Photo" />
          <CardBody>
            <CardText>{photo.description}</CardText>
            <CardText>
              <small className="text-muted">{photo.date}</small>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default PhotoItem;
