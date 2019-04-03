import React from 'react';
import Photo from '../photosList/photo/Photo';
import { Col } from 'reactstrap';

// display a list of up to 12 photos
const PhotosList = props => props.photos.slice(0, 12).map((photo, index) => {
    return (
        <Col sm="4" key={ index }>
            <Photo 
                photo={ photo } />
        </Col>
    )
})
  
export default PhotosList;