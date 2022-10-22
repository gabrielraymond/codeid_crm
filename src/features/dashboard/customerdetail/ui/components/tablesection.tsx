import { EditOutlined, EyeOutlined, MoneyCollectFilled } from '@ant-design/icons';
import { Avatar, Button, Col, Divider, Drawer, Input, PageHeader, Row, Space, Table } from 'antd';
import React, { useState } from 'react'
const { Column, ColumnGroup } = Table;
import classes from './cardCss.module.css'

interface DataType {
	key: React.Key;
    date: string;
	invoiceNumber: string;
	followUp:string;
	storeLocation: string;
	payment: string;
	quotation: string;
	sales: string;
    status: string;
}

const data:DataType[] = [
    {
        key: '1',
        date: "09/09/2022",
        invoiceNumber: "INV9199191",
        followUp: 'WHATSAPP',
        storeLocation: "EC BSD",
        payment: "DOWN_PAYMENT",
        quotation: "QUOTATION",
        sales:"Acong",
        status:"COLD",        
    },
    {
        key: '2',
        date: "09/08/2022",
        invoiceNumber: "INV919129191",
        followUp: 'WEB',
        storeLocation: "EC TGR",
        payment: "DOWN",
        quotation: "QUOTATION",
        sales:"Larry",
        status:"COLD",        
    },
]




const TableSection = (props:any) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div style={{marginTop: '20px'}}>
        <PageHeader 
            className='site-page-header'
            title={props.title}
        />
        <Table dataSource={data}>
            <Column title="Date" dataIndex="date" key="date" />
            <Column title="Invoice Number" dataIndex="invoiceNumber" key="invoiceNumber "/>
            <Column title="Follow Up" dataIndex="followUp" key="followUp" />
            <Column title="Store Location" dataIndex="storeLocation" key="storeLocation" />
            <Column title="Payment" dataIndex="payment" key="payment" />
            <Column title="Quotation" dataIndex='quotation' key='quotation' />
            <Column title="Sales" dataIndex="sales" key="sales" />
            <Column title='Action'dataIndex='action' key="action" render={(_) => (
                <Space size="middle">
                    <a  onClick={showDrawer} style={{color:'blue'}}><EyeOutlined /> See Detail</a>
                </Space>
            )}                
            />
        </Table>
        {props.title === "Deals" ? null : <Button type='primary'>+Activity</Button>}
        <Drawer title={<p>Detail Activity <EditOutlined /></p>} placement='right' onClose={onClose} open={open} closable={false} width={700}>
            <Row>
                <Col span={24}><h3>Recent Acitivy</h3></Col>
            </Row>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Created</p>
                <p>09/09/2022 | 3:31AM</p>
            </div>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Last Update</p>
                <p>09/09/2022 | 3:31AM</p>
            </div>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Activity Type</p>
                <p>WHATSAPP</p>
            </div>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Customer</p>
                <p>Michael</p>
            </div>  
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Sales</p>
                <p>Rahamt</p>
            </div>   
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Channel</p>
                <p>ES BSD</p>
            </div>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Status</p>
                <p>COLD</p>
            </div>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Priority</p>
                <p>GREEN</p>
            </div>        
           
            <Button type='primary' block style={{color: "#fff", marginTop: '10px'}}>Detail Leads</Button>

            <Divider style={{background: "#000"}} />
            <Row>
                <Col span={24}><h3>Estimated Brands</h3></Col>
            </Row>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                    <Avatar shape='square' size={64} icon={<MoneyCollectFilled />}/>
                    <h3 style={{marginLeft: '10px'}}>Brand Here</h3>
                </div>
                <p>Rp. 6.000.000</p>
            </div>

            <Divider style={{background: "#000"}} />
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <h3>Estimated Value</h3>                
                <p>Rp. 6.000.000</p>
            </div>

            <Divider style={{background: "#000"}} />
            <div>
                <h3>Feedback</h3>                
                <p>customer don't have money</p>
            </div>
            <Divider style={{background: "#000"}} />
            <Divider style={{background: "#000"}} />

            <Input style={{width: 'calc(100% - 100px)'}} placeholder="Write Comment.."/>
            <Button style={{marginLeft: '10px'}} type='primary'>Submit</Button>

            <Row>
                <Col style={{marginTop: '10px'}} span={24}><h3>Activity Comments</h3></Col>
            </Row>
        </Drawer>      
    </div>
  )
}

export default TableSection