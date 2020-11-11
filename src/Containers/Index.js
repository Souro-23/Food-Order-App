import React, { Component } from 'react'
import { Button, Row, Col, Card, Modal, Form, Input, Select } from 'antd';
import classes from './Index.module.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { IconButton, } from '@material-ui/core'
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import './index.css'
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


import Table from '../Components/Table/Table'
import SwipeableViews from 'react-swipeable-views';

const { Option } = Select;

const items = [
    {
        itemName: "Chicken",
        cost: "20",
        previewImage: "https://img.etimg.com/thumb/msid-75176755,width-640,resizemode-4,imgsize-612672/effect-of-coronavirus-on-food.jpg",
        description: "",
        quantity: "0"
    },
    {
        itemName: "Beef",
        cost: "4",
        previewImage: "https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-1200x628-facebook-1200x628.jpg",
        description: "",
        quantity: "1"
    },
    {
        itemName: "Pork",
        cost: "100",
        previewImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg",
        description: "",
        quantity: "3"
    },
    {
        itemName: "Rosted Potatoes",
        cost: "53",
        previewImage: "https://www.immerorganic.com/wp-content/uploads/2020/10/South-Indian-Bruschetta-Recipe.jpg",
        description: "",
        quantity: "1"
    },
    {
        itemName: "Mashed Potatoes",
        cost: "64",
        previewImage:  "https://hips.hearstapps.com/ghk.h-cdn.co/assets/cm/15/11/54fde7abb0b4c-mashed-potatoes-yogurt-400.jpg",
        description: "",
        quantity: "1"
    },


]




export class Index extends Component {
    state = {
        visible: true,
        index: 0,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };


    render() {
        const prefixSelector = (
            <Form.Item name="prefix" noStyle>
                <Select style={{ width: 70 }}>
                    <Option value="44">+44</Option>
                </Select>
            </Form.Item>
        );
        return (
            <div>
                <div className={classes.header} >
                    <h1>Fooodyy</h1>
                    <IconButton onClick={this.showModal}>
                        <Badge badgeContent={1} color="secondary">
                            <ShoppingCartOutlinedIcon style={{ fontSize: 30 }} />
                        </Badge>
                    </IconButton>
                </div>
                <br /><br /><br />
                <div className={classes.banner}>
                    <div className={classes.bannerContent}>
                        <h1  >Welcome Text</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                </div>
                <br /><br />
                <div className={classes.content}>
                    <Row gutter={[24, 24]} >
                        {items.map(item => (

                            <Col
                                xl={8}>
                                <Card className={classes.card}
                                    cover={
                                        <img
                                            alt="example"
                                            src={item.previewImage}
                                            className={classes.foodImage}
                                        />
                                    }>
                                    <div >
                                        <h3>{item.itemName}</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                    <br />
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div style={{ display: "flex" }}>
                                            <Button icon={<RemoveIcon />} />
                                            <Button >{item.quantity}</Button>
                                            {/* <h3 style={{width:"30px", margin:"auto"}}> 2 </h3> */}
                                            <Button type="primary" icon={<AddIcon />} />
                                        </div>
                                        <h2 style={{fontWeight:"bold"}}>{item.cost}£</h2>
                                    </div>


                                </Card>
                            </Col>))}

                    </Row>
                </div>

                <Modal

                    title="My Cart"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={1000}
                    footer={null}
                    bodyStyle={{ minHeight: "100px" }}
                >
                    <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
                        <div className={classes.table}>
                            <Table />
                            <br /><br />
                            <div style={{ display: "flex", justifyContent: "end" }}>
                                <Button className={classes.mybutton} onClick={() => this.setState({ index: 1 })} style={{ marginLeft: "20px" }} type="primary">Continue</Button>
                            </div>
                        </div>
                        <div>
                            <Form className={classes.myinput}>
                                <Row>
                                    <Col lg={10}>
                                        <Form.Item
                                            label="Name"
                                            name="name"
                                            rules={[{ required: true, message: 'Please input your username!' }]}
                                        >
                                            <Input  className={classes.myinput}/>
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
                            <br /><br />
                            <div style={{ display: "flex", justifyContent: "end" }}>
                                <Button className={classes.mybutton} onClick={() => this.setState({ index: 0 })} >Back</Button>
                                <Button className={classes.mybutton} style={{ marginLeft: "20px" }} type="primary">Confirm Order</Button>
                            </div>
                        </div>
                    </SwipeableViews>



                </Modal>

            </div>
        )
    }
}

export default Index
