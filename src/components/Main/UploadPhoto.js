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
            // display success message for 5 seconds
            setTimeout(() => this.setState({ uploaded: false }), 5000);
        })
        .catch(err => console.log(err));
    }

    componentDidMount(){
        this.setState({ uploaded: false });
    }

  render() {
    const message = this.state.uploaded ? <Alert className="mt-4 text-center" color="dark">Uploaded Successfully!</Alert> : null;
    return (
        <Container className="silver-color">         
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Form className="form-border" onSubmit={ this.onSubmitForm } >
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
                        <Button color="dark" className="silver-color silver-border">Submit</Button>
                    </Form>
                    { message } 
                </Col>
            </Row>
        </Container>
    );
  }
}

export default UploadPhoto;
