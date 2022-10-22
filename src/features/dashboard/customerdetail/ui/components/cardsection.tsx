import { EditOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Card, Col, Row } from 'antd'
import React from 'react'
import classes from './cardCss.module.css';

const CardSection = () => {
  return (
    <Card>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div style={{display: 'flex'}}>
                <Avatar size={64} icon={<UserOutlined />}/>
                <h2 style={{marginLeft: '10px', marginTop: '10px'}} >Michael</h2>
            </div>
            <EditOutlined style={{fontSize: '32px'}}/>
        </div>
        <div style={{margin: '16px 0'}} className={classes.col}>
            <Row>
                <Col span={12}><h3>Basic information</h3></Col>
                <Col span={12}><h3>Address information</h3></Col>
            </Row>
            <Row>
                <Col span={6}>Name</Col>
                <Col span={6}>Michael</Col>
                <Col span={6}>Address Line 1</Col>
                <Col span={6}>Jakarta</Col>
            </Row>
            <Row>
                <Col span={6}>Phone Number</Col>
                <Col span={6}>08672218</Col>
                <Col span={6}>Sub Distric</Col>
                <Col span={6}>-</Col>
            </Row>
            <Row>
                <Col span={6}>Email</Col>
                <Col span={6}>MichaelWannabe@gmail.com</Col>
                <Col span={6}>City/Distric</Col>
                <Col span={6}>-</Col>
            </Row>
            <Row>
                <Col span={6}>Priority</Col>
                <Col span={6}>Green</Col>
                <Col span={6}>Province</Col>
                <Col span={6}>-</Col>
            </Row>
            <Row>
                <Col span={6}>Date of Birth</Col>
                <Col span={6}>-</Col>
                <Col span={6}>Zip Code</Col>
                <Col span={6}>-</Col>
            </Row>
        </div>
        <div style={{margin: '10px 0'}}>
            <Row>                
                <Button style={{color:"#fff", width: '200px'}} type='primary' >Upgrade Prospect</Button>                
                <Button style={{background:'red', color:"#fff", width: '200px', marginLeft: '10px'}} type='default' >Drop Lead</Button>            
            </Row>
            
        </div>
    </Card>
  )
}

export default CardSection