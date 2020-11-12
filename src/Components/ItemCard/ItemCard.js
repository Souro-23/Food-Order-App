import React, { Component } from 'react'
import {Card, Button} from 'antd'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import classes from './ItemCard.module.css'

export class ItemCard extends Component {
    render() {
        const item = this.props.item
        
        return (
            <Card className={classes.card}
                cover={
                    <img
                        alt="example"
                        src={item.previewImage}
                        className={classes.foodImage} />}>
                <div >
                    <h3>{item.itemName}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <br />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                        <Button disabled={item.quantity<1} onClick={()=>this.props.updateQuantity(item.id,-1)} icon={<RemoveIcon />} />
                        <Button >{item.quantity}</Button>
                        {/* <h3 style={{width:"30px", margin:"auto"}}> 2 </h3> */}
                        <Button onClick={()=>this.props.updateQuantity(item.id,1)} type="primary" icon={<AddIcon />} />
                    </div>
                    <h2 style={{ fontWeight: "bold" }}>{item.price}£</h2>
                </div>


            </Card>
        )
    }
}

export default ItemCard
