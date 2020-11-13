import React, { Component } from 'react'
import {Card, Button} from 'antd'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import classes from './ItemCard.module.css'

export class ItemCard extends Component {
    render() {
        const item = this.props.item
        
        return (
            <Card  className={classes.card}
                cover={
                    <img
                        alt="example"
                        src={item.image}
                        className={classes.foodImage} />}
                        >
                <div >
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
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
