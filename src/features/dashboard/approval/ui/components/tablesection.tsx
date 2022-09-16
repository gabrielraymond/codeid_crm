import { EyeOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Divider, Drawer, Row, Space, Table } from 'antd'
import React, { useState } from 'react'
import ItemSection from './itemsection';

const {Column, ColumnGroup} = Table

interface Data {
    title:string;
}


interface DataType {
    key: React.Key;
    no: number;
    name: string;
    date: string;
    invoice: string;
    channel: string;
    sales: string;
}

const data:DataType[] = [
    {
        key: '1',
        no: 1,
        name: "Michael",
        date: "09 Septemeber 2022",
        invoice: "INV123123123",
        channel: "Dipo",
        sales: "Gabriel",
    },
    {
        key: '1',
        no: 2,
        name: "Garvyn",
        date: "09 Septemeber 2022",
        invoice: "INV123123123",
        channel: "Dipo",
        sales: "Aldih",
    },
]

const TableSection = (props:Data) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div style={{marginTop: '20px'}}>
        <Table dataSource={data}>
            <Column title="No" dataIndex="no" key="no" />
            <Column title="Name" dataIndex='name' key='name' />
            <Column title="Date" dataIndex="date" key="date" />
            <Column title="Invoice" dataIndex="invoice" key="invoice" />
            <Column title="Channel" dataIndex='channel' key="channel" />
            <Column title="Sales" dataIndex="sales" key="sales" />
            <Column title="Action" dataIndex="action" key="action" render={(_) => (
                <Space size="middle">
                    <a onClick={showDrawer} style={{color:'blue'}}><EyeOutlined /> See Detail</a>
                </Space>
            )} />
        </Table>
        <Drawer title="Detail Order" closable={false} placement="right" onClose={onClose} open={open} width={700} style={{color: "#000"}}>
            <Row>
                <Col span={24}><h3>Detail SKU</h3></Col>
            </Row>
            <ItemSection />
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Total Hpp:</p>
                <p>Rp. 3.745.743</p>
            </div>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Packing Fee:</p>
                <p>Rp. 0</p>
            </div>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Shipping Fee:</p>
                <p>Rp. 0</p>
            </div>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Discount:</p>
                <p>Rp. 0</p>
            </div>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Sub Total:</p>
                <p>Rp. 18.900.000</p>
            </div>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Discount Request:</p>
                <div style={{display: 'flex'}}>
                    <p>Rp. 5.670.000 &nbsp;</p>
                    <p>(30%)</p>
                </div>
            </div>

            <Divider style={{background: "#000"}}/>

            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Total Price:</p>
                <p>Rp. 13.230.000</p>
            </div>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Expeted Delivery Date:</p>
                <p>30 September 2022</p>
            </div>

            <Divider style={{background: "#000"}}/>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Request By:</p>
                <p>Aldih</p>
            </div>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Channel Name:</p>
                <p>Dipo</p>
            </div>

            <Row>
                <Col style={{marginTop: '10px'}} span={24}><h3>Activity Comments</h3></Col>
            </Row>
            <h2>-</h2>

            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Status:</p>
                <p>WAITING_APPROVAL</p>
            </div>
            {props.title === "needmyapproval" ? (
                <div>                    
                    <Row style={{marginTop: '10px'}}>                
                        <Button style={{color:"#fff", width: '310px'}} type='primary' >Upgrade Prospect</Button>                
                        <Button style={{background:'red', color:"#fff", width: '310px', marginLeft: '10px'}} type='default' >Drop Lead</Button>            
                    </Row>
                </div>
            ) : (
                <div>
                    <Button block style={{background: 'blue', color:"#fff"}}>Add Payment</Button>
                    <Row style={{marginTop: '10px'}}>                
                        <Button style={{color:"#fff", width: '310px'}} type='primary' >Upgrade Prospect</Button>                
                        <Button style={{background:'red', color:"#fff", width: '310px', marginLeft: '10px'}} type='default' >Drop Lead</Button>            
                    </Row>
                </div>
            )
            }
        </Drawer>
    </div>
  )
}

export default TableSection