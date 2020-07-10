import React, { Component } from 'react'
import { Row, Col, Card, Button, Modal, Form, Table, Tabs, Tab, Alert } from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import DatePicker from 'react-datepicker'
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "react-datepicker/dist/react-datepicker.css";
import Order from '../../../services/order';
const OrderApi = new Order()
class AddOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orderDate: new Date()
        }

    }

    getInputTextValue = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
            isinvalid: ''
        })
    }

    handleChangeSt = date => {
        this.setState({
            orderDate: date
        });
    };
    formatDate = date => {
        const eventDate = new Date(date)
        const monthIndex = ('0' + (eventDate.getMonth() + 1)).slice(-2)
        const day = ('0' + eventDate.getDate()).slice(-2)
        const year = eventDate.getFullYear()
        return year + '-' + monthIndex + '-' + day
      }
    getFormattedDate = (date) => {
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        let locatDate = new Date(date);
        return locatDate.getDate() + "/" + monthNames[locatDate.getMonth()] + "/" + locatDate.getFullYear()
    }
    getOrderValue = () => {

        const orderVo = {
            userId: OrderApi.getProfile().id,
            orderValue: this.state.orderValue,
            orderClient: this.state.orderClient,
            orderDate: this.formatDate(this.state.orderDate),
            orderUnique: this.state.orderUnique
        }
        OrderApi.addOrder(orderVo)
            .then(result => {
                this.props.history.push('/Order/List')
            })
    }
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5"> Add Order</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Purchase Order Value </Form.Label>
                                                <Form.Control type="text" placeholder="Purchase Order Value"
                                                    name='orderValue'
                                                    onChange={this.getInputTextValue}
                                                />
                                                <span className='error-msg'>

                                                </span>
                                                <span className='error-msg'>

                                                </span>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Purchase Order Client</Form.Label>
                                                <Form.Control type="text" placeholder="Purchase Order Client"
                                                    name='orderClient'
                                                    onChange={this.getInputTextValue}
                                                />
                                                <span className='error-msg'>

                                                </span>
                                            </Form.Group>
                                            <Form.Group>

                                            </Form.Group>
                                            <Form.Group controlId="formBasicName">
                                                <Form.Label>Purchase Order Date</Form.Label>
                                                <DatePicker className="form-control"
                                                    selected={this.state.orderDate}
                                                    onChange={this.handleChangeSt}
                                                />
                                                <span className='error-msg'>

                                                </span>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPhone">
                                                <Form.Label>Unique Name</Form.Label>
                                                <Form.Control type="text" placeholder="UniqueName"
                                                    name='orderUnique'
                                                    onChange={this.getInputTextValue}
                                                />
                                                <span className='error-msg'>

                                                </span>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicFirstName">

                                                <Button variant="primary" onClick={this.getOrderValue}>
                                                    Upload
                                                </Button>
                                                <Button variant="danger" >
                                                    cancel
                                                </Button>

                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Aux >
        )
    }
}

export default AddOrder
