import React, { Component } from 'react'
import { Row, Col, Card, Button, Modal, Form, Alert, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import { MDBDataTable } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Order from '../../../services/order';
const OrderApi = new Order()
let RowArray = [];
class ListOrder extends Component {
    constructor(props) {
        super(props)

    }


    componentDidMount() {
        this.getOrderList()
    }

    getFormattedDate = (date) => {
        let locatDate = new Date(date);
        return locatDate.getDay() + "/" + locatDate.getMonth() + "/" + locatDate.getFullYear()
    }
    getOrderList = () => {
        OrderApi.listAllOrder()
            .then(result => {
                RowArray = [];
                for (let i = 0; i < result.data.length; i++) {
                    RowArray.push({
                        orderValue: result.data[i].orderValue,
                        orderClient: result.data[i].orderClient,
                        orderDate: this.getFormattedDate(result.data[i].orderDate),
                        orderUnique: result.data[i].orderUnique,
                        action: [
                            <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                                <span
                                    className='iconSet' id="editResource"
                                ><i className="feather icon-edit"></i>
                                </span>
                            </OverlayTrigger>
                            ,
                            <OverlayTrigger overlay={<Tooltip>Delete</Tooltip>}>
                                <span className='iconSet' id="delResource" >
                                    <i className="feather icon-trash-2"></i>
                                </span></OverlayTrigger>
                        ]
                    })
                }
                RowArray = RowArray.reverse()
                this.setState({ RowArray: RowArray });
            })
    }
    render() {
        console.log('RowArray', RowArray)
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
                }, {
                    label: 'Action',
                    field: 'action',
                    sort: 'asc',
                    width: 150
                },
            ],
            rows: RowArray
        }
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5"> Add Order</Card.Title>
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

export default ListOrder
