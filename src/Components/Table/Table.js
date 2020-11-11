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
      title: 'Quantiy',
      dataIndex: 'quantiy',
      key: 'quantiy',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Edit Quantity',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button icon={<RemoveIcon />} />
          <Button type="primary" icon={<AddIcon />} />
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      sno:'1',
      name: 'Roasted Potato',
      quantiy: "4kg",
      price: "2 £"
    },
    {
        key: '1',
        sno:'2',
        name: 'Pork',
        quantiy: "1kg",
        price: "45 £"
      },
      {
        key: '1',
        sno:'3',
        name: 'Chicken',
        quantiy: "2kg",
        price: "23 £"
      },
    
  ];


export class DataTable extends Component {
    render() {
        return (
            <Table pagination={false} columns={columns} dataSource={data} />
        )
    }
}

export default DataTable
