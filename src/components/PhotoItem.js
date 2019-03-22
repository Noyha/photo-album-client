import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class PhotoItem extends Component {
  render() {
    let photo = { description: '', path: '', hashtags: [], date: '' };
    if (this.props.photo !== null) {
      photo = this.props.photo;
    }
    // const { _id, desc, imgPath, hashtags } = this.props.photo;
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={photo.path} alt="photo" />
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
