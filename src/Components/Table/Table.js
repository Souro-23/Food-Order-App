import React, { Component } from 'react'
import { Table, Tag, Space, Button } from 'antd';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const columns = [
    {title:"Sno",
    dataIndex:"sno",
    key:"sno"},
    {
      title: 'Item Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
  ];
  
  


export class DataTable extends Component {
  
    render() {
      
      const data = this.props.cartItems.map((item, index)=>{
        return {
          key:item.id,
          sno:index,
          name:item.name,
          quantity:item.quantity,
          price:item.price,
        }
      })
        return (
            <Table pagination={false} columns={columns} dataSource={data} />
        )
    }
}

export default DataTable
