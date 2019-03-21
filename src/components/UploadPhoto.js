import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

class UploadPhoto extends Component {
  render() {
    return (
        <Row>
            <Col>
                <Form>
                    <FormGroup>
                        <Label for="exampleText">Description</Label>
                        <Input type="textarea" name="description" id="" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="uploadImage">Upload Image</Label>
                        <Input type="file" name="uploadImage" id="uploadImage" />
                        <FormText color="muted">
                            Upload Image
                        </FormText>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Col>
        </Row>
    );
  }
}

export default UploadPhoto;
