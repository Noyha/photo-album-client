import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, Alert } from 'reactstrap';

class UploadPhoto extends Component {
    state = {
        file: null,
        desc: '',
        fileValue: '',
        uploaded: false
    }

    onFileChange = e => {
        this.setState({ file: e.target.files[0], fileValue: e.target.value })
    }

    onInputChange = e => {
        this.setState({ desc: e.target.value })
    }

    onSubmitForm = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', this.state.file, this.state.file.name);
        formData.append('desc', this.state.desc);
        fetch('/api/photos/upload', {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(() => {
            this.setState({ file: null, desc: '', fileValue: '', uploaded: true })
        })
        .catch(err => console.log(err));
    }

  render() {
    const message = this.state.uploaded ? <Alert className="mt-4 text-center" color="success">Uploaded Successfully!</Alert> : null;
    return (
        <Container>         
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Form onSubmit={ this.onSubmitForm }>
                        <FormGroup>
                            <Label for="desc">Description</Label>
                            <Input 
                                type="textarea" 
                                name="desc"
                                value={ this.state.desc }
                                onChange={ this.onInputChange }
                                required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="photo">Upload Image</Label>
                            <Input 
                                type="file" 
                                name="photo"
                                value={ this.state.fileValue }
                                onChange={ this.onFileChange }
                                required />
                            <FormText color="muted">
                                Upload Image
                            </FormText>
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                    { message }
                </Col>
            </Row>
        </Container>
    );
  }
}

export default UploadPhoto;
