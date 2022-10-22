import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import React from 'react'

const ItemSection = () => {
  return (
    <div style={{ display: 'flex'}}>
        <Avatar 
            shape='square'
            size={84}
            icon={<UserOutlined /> }
        />
        <div style={{width: '550px', marginLeft: '25px'}}>
            <h2>EICHHOLTZ 114102 MIRROR QUINN BRUSHED BRASS FINISH | SMOKE GLASS | BEVELLED MIRROR GLASS 85,5 x 85,5 x H. 5 cm</h2>
                <div style={{display: 'flex', color:"#000"}}>
                    <p>Rp. 18.900.000 &nbsp;</p>                          
                    <p>x 1</p>
                </div>
                <p style={{color: 'blue', fontWeight:"700"}}>Hpp: Rp. 3.745.743</p>
                <ul style={{color: "#000"}}>
                    <li><p>1144102</p></li>
                    <li><p>MIRROR</p></li>
                    <li><p style={{width: '400px'}}>BRUSHED BRASS FINISH | SMOKE GLASS | BEVELLED MIRROR GLASS - SOON</p></li>
                </ul>                    
        </div>                
    </div>
  )
}

export default ItemSection