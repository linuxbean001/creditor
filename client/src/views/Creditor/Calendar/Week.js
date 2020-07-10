import React, { Component } from 'react'
import { Row, Col, Card, Button, Modal, Form, Alert, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import { MDBDataTable } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Calendar from '../../../services/calendar';

const CalendarApi = new Calendar();
let RowArray = [];
class WeekOrder extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.getAllTodayOrder()
    }

    getAllTodayOrder = () => {
        CalendarApi.getWeekOrder()
            .then(result => {
                console.log('result66666',result)
                RowArray = [];
                for (let i = 0; i < result.data.length; i++) {
                    RowArray.push({
                        orderValue: result.data[i].orderValue,
                        orderClient: result.data[i].orderClient,
                        orderDate: result.data[i].orderDate,
                        orderUnique: result.data[i].orderUnique,
                    })
                }
                RowArray = RowArray.reverse()
                this.setState({ RowArray: RowArray });
            })
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

export default WeekOrder
