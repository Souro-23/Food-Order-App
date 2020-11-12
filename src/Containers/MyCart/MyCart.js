import { Button } from 'antd'
import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import Table from '../../Components/Table/Table'
import UserForm from '../../Components/UserData/UserForm'
import classes from './MyCart.module.css'



export class MyCart extends Component {
    state = {
        index: 0
    }

    changeTabs = index => {this.setState({index});};

    render() {
        return (
            <SwipeableViews index={this.state.index} onChangeIndex={this.changeTabs}>
                        <div className={classes.table}>
                            <Table {...this.props}/>
                            <br /><br />
                            <div style={{ display: "flex", justifyContent: "end" }}>
                                <Button disabled={this.props.cartItems.length<1} className={classes.mybutton} onClick={() => this.setState({ index: 1 })} style={{ marginLeft: "20px" }} type="primary">Continue</Button>
                            </div>
                        </div>
                        <div>
                            <UserForm {...this.props}/>
                            <br /><br />
                            <div style={{ display: "flex", justifyContent: "end" }}>
                                <Button  className={classes.mybutton} onClick={() => this.setState({ index: 0 })} >Back</Button>
                                <Button className={classes.mybutton} style={{ marginLeft: "20px" }} type="primary">Confirm Order</Button>
                            </div>
                        </div>
                    </SwipeableViews>
        )
    }
}

export default MyCart
