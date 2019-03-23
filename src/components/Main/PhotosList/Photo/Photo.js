import React, { Component } from 'react';
import { Card, CardImg, CardText, CardImgOverlay } from 'reactstrap';

class Photo extends Component {
  state = {
    isHovering: false,
  };

  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState = (state) => {
    return {
      isHovering: !state.isHovering,
    };
  }
  render() {
    const photo = this.props.photo !== null ? this.props.photo : null;
    return (
      <div>
        <Card 
          className="mb-4" 
          style={{ border: 'none' }}
          onMouseEnter={ this.handleMouseHover }
          onMouseLeave={ this.handleMouseHover } >
          <CardImg 
            style={{ opacity: this.state.isHovering ? '0.3' : '1' }}
            top 
            width="100%" 
            height="200rem" 
            src={ photo.path } 
            alt="Photo"
          />
          { this.state.isHovering && (
            <CardImgOverlay>
              <CardText className="font-weight-bold">{ photo.description }</CardText>
              <CardText>
                <small className="text-muted">{ photo.date }</small>
              </CardText>
            </CardImgOverlay>
          ) }
        </Card>
      </div>
    );
  }
}

export default Photo;
