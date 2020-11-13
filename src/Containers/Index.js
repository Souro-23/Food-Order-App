import React, { Component } from 'react'
import { Row, Col, Modal } from 'antd';
import classes from './Index.module.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { CircularProgress, IconButton, } from '@material-ui/core'
import Badge from '@material-ui/core/Badge';

import './index.css'
import ItemCard from '../Components/ItemCard/ItemCard';

import MyCart from './MyCart/MyCart';
// import { getProducts } from '../Firebase/Firebase';
import firebase from "../Firebase/Firebase-config";
import "firebase/firestore";

const db = firebase.firestore();

export class Index extends Component {
    state = {
        visible: false,
        foodItems: null,
    };


    async componentDidMount() {
        //laoding products from database 

        const items = await db.collection('Products').get().then(snapshot => (
            snapshot.docs.map(doc => ({
                id:doc.id,
                ...doc.data(),
                quantity: 0
            })
            )))
        console.log(items)    
        this.setState({ foodItems: items })
    }


    // to update quatity of that selected item 
    updateQuantity = (id, key) => {
        let newFoodItems = this.state.foodItems.map(item => {
            if (item.id === id) {
                return {
                    id: item.id,
                    quantity: key > 0 ? item.quantity + 1 : item.quantity - 1,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    description: item.description,
                }
            }
            return item
        })
        this.setState({ foodItems: newFoodItems })
    }



    render() {
        const remove = (item) => {
            if (item.quantity > 0)
                return item
        }
        let cartItems = []
        if (this.state.foodItems)
            cartItems = this.state.foodItems.filter(remove)
         

        return (
            <div>
                <div className={classes.header} >
                    <h1 style={{ fontWeight: "bold" }}>Fooody</h1>
                    <IconButton onClick={() => this.setState({ visible: true })}>
                        <Badge badgeContent={cartItems.length} color="secondary">
                            <ShoppingCartOutlinedIcon style={{ fontSize: 30 }} />
                        </Badge>
                    </IconButton>
                </div>
                <br /><br /><br />
                <div className={classes.banner}>
                    <div className={classes.bannerContent}>
                        <h1>Welcome Text</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                </div>
                <br /><br />
                <div className={classes.content}>
                    <Row gutter={[24, 24]} >
                        {this.state.foodItems ?
                            this.state.foodItems.map(item => (
                                <Col xl={8} lg={8} md={12} sm={12} xs={24}>
                                    <ItemCard key={item.id} item={item} updateQuantity={this.updateQuantity} />
                                </Col>))
                            :
                            <div style={{width:"100%",textAlign:"center"}}>
                                <CircularProgress />
                            </div>
                        }
                    </Row>
                </div>
                <Modal
                    title="My Cart"
                    visible={this.state.visible}
                    onCancel={() => this.setState({ visible: false })}
                    width={1000}
                    footer={null}
                    bodyStyle={{ minHeight: "100px" }}
                >
                    <MyCart cartItems={cartItems} closeModal={() => this.setState({ visible: false })} />
                </Modal>

            </div>
        )
    }
}

export default Index
