import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

class UploadPhoto extends Component {

  render() {
    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={this.onSubmitForm}>
                        <FormGroup>
                            <Label for="desc">Description</Label>
                            <Input 
                                type="textarea" 
                                name="desc" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="uploadImage">Upload Image</Label>
                            <Input 
                                type="file" 
                                name="uploadImage" />
                            <FormText color="muted">
                                Upload Image
                            </FormText>
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default UploadPhoto;
