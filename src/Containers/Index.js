import React, { Component } from 'react'
import { Button, Row, Col, Modal } from 'antd';
import classes from './Index.module.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { IconButton, } from '@material-ui/core'
import Badge from '@material-ui/core/Badge';
 
import './index.css'
 



import Table from '../Components/Table/Table'
import SwipeableViews from 'react-swipeable-views';
import ItemCard from '../Components/ItemCard/ItemCard';
import UserForm from '../Components/UserData/UserForm';
import MyCart from './MyCart/MyCart';



const items = [{
        id:1,
        quantity:0,
        itemName: "Chicken",
        price: "20",
        previewImage: "https://img.etimg.com/thumb/msid-75176755,width-640,resizemode-4,imgsize-612672/effect-of-coronavirus-on-food.jpg",
        description: "",
    },
    {   id:2,
        quantity: 0,
        itemName: "Beef",
        price: "4",
        previewImage: "https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-1200x628-facebook-1200x628.jpg",
        description: "",
    },
    {   id:3,
        quantity: 0,
        itemName: "Pork",
        price: "100",
        previewImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg",
        description: "",
    },
    {   id:4,
        quantity: 0,
        itemName: "Rosted Potatoes",
        price: "53",
        previewImage: "https://www.immerorganic.com/wp-content/uploads/2020/10/South-Indian-Bruschetta-Recipe.jpg",
        description: "",
    },
    {   id:5,
        quantity: 0,
        itemName: "Mashed Potatoes",
        price: "64",
        previewImage:  "https://hips.hearstapps.com/ghk.h-cdn.co/assets/cm/15/11/54fde7abb0b4c-mashed-potatoes-yogurt-400.jpg",
        description: "",
    }]




export class Index extends Component {
    state = {
        visible: true,      
        foodItems:items,
    };


    // to update quatity of that selected item 
    updateQuantity=(id,key)=>{  
        let newFoodItems = this.state.foodItems.map(item=>{
            if(item.id === id){ 
                return {
                    id:item.id,
                    quantity:key>0?item.quantity+1:item.quantity-1,
                    itemName:item.itemName,
                    price:item.price,
                    previewImage:item.previewImage,
                    description:item.description,
                    }
            }
            return item
        })
        this.setState({foodItems:newFoodItems})
    }



    render() { 
        const remove=(item)=>{
            if(item.quantity>0) 
                return item   
        }
        const cartItems =  this.state.foodItems.filter(remove) 


        return (
            <div>
                <div className={classes.header} >
                    <h1 style={{fontWeight:"bold"}}>Fooody</h1>
                    <IconButton onClick={()=>this.setState({visible: true})}>
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
                        {this.state.foodItems.map(item => (
                            <Col xl={8}>
                               <ItemCard key={item.id} item= {item} updateQuantity={this.updateQuantity}/>
                            </Col>))}
                    </Row>
                </div>
                <Modal
                    title="My Cart"
                    visible={this.state.visible}
                    onCancel={()=>this.setState({visible: false})}
                    width={1000}
                    footer={null}
                    bodyStyle={{ minHeight: "100px" }}
                >
                    <MyCart cartItems={cartItems}  />
                </Modal>

            </div>
        )
    }
}

export default Index
