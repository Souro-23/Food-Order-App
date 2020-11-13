import { Button, Col, Form, Input, message, Row, Select } from 'antd'
import React, { Component } from 'react'
import classes from './UserForm.module.css'
import firebase from "../../Firebase/Firebase-config";
import "firebase/firestore";


var db = firebase.firestore();


const { Option } = Select;


export class UserForm extends Component {
    state = {
        userData: null,
        submiting:false
    }
    submitOrder = (data) => {
        this.setState({submiting:true})
        const FinalCart = this.props.cartItems.map(item => ({
            Product: db.doc(`Products/${item.id}`),
            Quantity: item.quantity
        }))
        console.log(FinalCart)
        db.collection("Users").add({
            name: data.name,
            contact: data.contact,
            address: data.address,
        }).then((docRef) => {
            console.log(docRef.id)
            db.collection("Orders").add({
                User: db.doc(`Users/${"a1DwjyFvXaAw92dSgtK2"}`),
                Time: data.preferdTime,
                Cart: FinalCart
            }).then(docRef => {
                this.props.closeModal()
                this.setState({submiting:false})
                message.success("Order Placed Successfully")
            }).catch(err => console.log("Failed123", err))

        }).catch((err) => console.log("failed", err))

    }

    render() {
        const prefixSelector = (
            <Form.Item name="prefix" noStyle>
                <Select style={{ width: 70 }}>
                    <Option value="44">+44</Option>
                </Select>
            </Form.Item>
        );
        return (
            <Form onFinish={this.submitOrder} >
                <Row>
                    <Col lg={14}>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder="name" />
                        </Form.Item>
                    </Col>

                    <Col lg={14}>
                        <Form.Item
                            name="contact"
                            label="Contact Number"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >
                            <Input placeholder="Contact No" addonBefore={prefixSelector} style={{ width: '100%' }} />
                        </Form.Item>

                    </Col>
                </Row>
                <br />
                <Row>
                    <Col lg={16}>
                        <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please input your address!' }]}>
                            <Input.TextArea placeholder="Address" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Item
                            name="preferdTime"
                            hasFeedback
                            rules={[{ required: true, message: 'Required' }]}
                        >
                            <Select placeholder="Select Delevery time">
                                <Option value="morning">Morning</Option>
                                <Option value="Afternoon">Afternoon</Option>
                                <Option value="Evening">Evening</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <br /><br />
                <div style={{ display: "flex", justifyContent: "end" }}>
                    <Button className={classes.mybutton} onClick={this.props.back} >Back</Button>
                    <Button loading={this.state.submiting} htmlType="submit" className={classes.mybutton} style={{ marginLeft: "20px" }} type="primary">Confirm Order</Button>
                </div>
            </Form>
        )
    }
}

export default UserForm
