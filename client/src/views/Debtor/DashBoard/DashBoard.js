import React, { Component } from 'react'
import { Row, Col, Card, Button, Modal, Form, Table, Tabs, Tab, Alert } from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
class DashBoard extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5"> DEBTOR VIEW</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Tabs defaultActiveKey="LOGO">

                                    <Tab eventKey="LOGO" title="LOGO">

                                        <div>
                                            <br />
                                            <Form.Control type="file" name='profilephoto' />
                                            <br />
                                        </div>
                                        <Button variant="dark" >
                                            Upload Image
                                        </Button>
                                    </Tab>
                                    <Tab eventKey="SEARCH" title="SEARCH">
                                        <h5>SEARCH</h5>
                                        <hr />
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Start Date</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Start Date" name="startDate" />
                                                <span className='error-msg'>
                                                </span>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>End Date</Form.Label>
                                                <Form.Control type="text" placeholder="Enter End Date" name="endDate" />
                                                <span className='error-msg'>
                                                </span>
                                            </Form.Group>

                                        </Form>

                                        <Button variant="primary" >
                                            Search
                                            </Button>
                                        <Button variant="danger" >
                                            Cancel
                                            </Button>
                                    </Tab>
                                    <Tab eventKey="DELETE DOCUMENT" title="DELETE DOCUMENT">

                                        <h5>DELETE DOCUMENT</h5>
                                        <hr />
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Doc Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Start Date" name="startDate" />
                                                <span className='error-msg'>
                                                </span>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Doc Hash</Form.Label>
                                                <Form.Control type="text" placeholder="Enter End Date" name="endDate" />
                                                <span className='error-msg'>
                                                </span>
                                            </Form.Group>

                                        </Form>

                                        <Button variant="primary" >
                                            Push to Node
                                            </Button>
                                        <Button variant="danger" >
                                            Cancel
                                            </Button>
                                    </Tab>
                                    <Tab eventKey="Contact" title="Contact">

                                        <h5>CONTACT</h5>
                                        <hr />
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Contact No</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Contact No" name="contact" />
                                                <span className='error-msg'>
                                                </span>
                                            </Form.Group>

                                        </Form>

                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Questions</Form.Label>
                                                <Form.Control type="text" placeholder="Questions" name="questions" />
                                                <span className='error-msg'>
                                                </span>
                                            </Form.Group>

                                        </Form>

                                        <Button variant="primary" >
                                            Contact
                                            </Button>
                                        <Button variant="danger" >
                                            Cancel
                                            </Button>
                                    </Tab>
                                </Tabs>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Aux >
        )
    }
}

export default DashBoard
