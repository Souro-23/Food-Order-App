import { Col, Form, Input, Row, Select } from 'antd'
import React, { Component } from 'react'

const { Option } = Select;


export class UserForm extends Component {
    render() {
        const prefixSelector = (
            <Form.Item name="prefix" noStyle>
                <Select style={{ width: 70 }}>
                    <Option value="44">+44</Option>
                </Select>
            </Form.Item>
        );
        return (
            <Form  >
                <Row>
                    <Col lg={10}>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input   />
                        </Form.Item>
                    </Col>

                    <Col offset={2} lg={10}>
                        <Form.Item
                            name="contact"
                            label="Contact Number"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >
                            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                        </Form.Item>

                    </Col>
                </Row>
                <br />
                <Row>
                    <Col lg={16}>
                        <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please input your address!' }]}>
                            <Input.TextArea />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Item
                            name="select"
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
            </Form>
        )
    }
}

export default UserForm
