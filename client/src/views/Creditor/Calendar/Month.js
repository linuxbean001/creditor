import React, { Component } from 'react'
import { Row, Col, Card, Button, Modal, Form, Alert, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import { MDBDataTable } from 'mdbreact';
import DatePicker from 'react-datepicker'
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "react-datepicker/dist/react-datepicker.css";
import Calendar from '../../../services/calendar';

const CalendarApi = new Calendar();
let RowArray = [];
class MonthOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDateFn: this.getFirstDayOfCurrentMonth(new Date()),
            endDateFn: this.getLastDayOfCurrentMonth(new Date()),
        }

    }

    componentDidMount() {
        this.getAllTodayOrder()
    }
    getFirstDayOfCurrentMonth = (d) => {
        return new Date(d.getFullYear(), d.getMonth(), 1);
    }
    getLastDayOfCurrentMonth = (d) => {
        return new Date(d.getFullYear(), d.getMonth() + 1, 0);
    }

    handleChangeSt = date => {
        this.setState({
            startDateFn: date
        }, () => {
            this.getAllTodayOrder()
        });
    };
    handleChangeEd = date => {
        this.setState({
            endDateFn: date
        }, () => {
            this.getAllTodayOrder()
        });
    };
    getAllTodayOrder = () => {
        CalendarApi.getMonthOrder()
            .then(result => {
                RowArray = [];
                for (let i = 0; i < result.data.length; i++) {

                    let firstday = this.formatDate(this.state.startDateFn);
                    let lastday = this.formatDate(this.state.endDateFn);
                    let checkDate = this.formatDate(result.data[i].orderDate);
                    if (firstday <= checkDate && lastday >= checkDate) {

                        RowArray.push({
                            orderValue: result.data[i].orderValue,
                            orderClient: result.data[i].orderClient,
                            orderDate: result.data[i].orderDate,
                            orderUnique: result.data[i].orderUnique,
                        })
                    }

                }
                RowArray = RowArray.reverse()
                this.setState({ RowArray: RowArray });
            })
    }

    formatDate = date => {
        const eventDate = new Date(date)
        const monthIndex = ('0' + (eventDate.getMonth() + 1)).slice(-2)
        const day = ('0' + eventDate.getDate()).slice(-2)
        const year = eventDate.getFullYear()
        return year + '-' + monthIndex + '-' + day
    }
    render() {
        const data = {
            columns: [
                {
                    label: 'Purchase Order Value',
                    field: 'orderValue',
                    sort: 'asc',
                    width: 150
                }, {
                    label: 'Purchase Order Client',
                    field: 'orderClient',
                    sort: 'asc',
                    width: 150
                }, {
                    label: 'Purchase Order Date',
                    field: 'orderDate',
                    sort: 'asc',
                    width: 150
                }, {
                    label: 'Purchase Order Unique',
                    field: 'orderUnique',
                    sort: 'asc',
                    width: 150
                }
            ],
            rows: RowArray
        }
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Today's Order</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row className='filterBox'>
                                    <Col md={25}>
                                        <Form.Group>
                                            <DatePicker className="form-control"
                                                selected={this.state.startDateFn}
                                                onChange={this.handleChangeSt}


                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={25}>
                                        <Form.Group>
                                            <DatePicker className="form-control"
                                                selected={this.state.endDateFn}
                                                onChange={this.handleChangeEd}

                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <MDBDataTable
                                    striped
                                    data={data}
                                    hover
                                />
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Aux >
        )
    }
}

export default MonthOrder
