import { Input } from 'antd'
import React from 'react'
import TableSection from './tablesection'
import TitleSection from './titlesection'

interface props {
    approval: any
}

const ApprovalComponent = (props:props) => {
  const {approval} = props
  return approval === "needmyapproval" ? (
    <div>
        <TitleSection title="Need My Approval"/>
        <Input placeholder='Search Customer name/inv name' style={{width: '300px'}} />
        <TableSection title='needmyapproval'/>    
    </div>
  ) : (
    <div>
        <TitleSection title={approval}/>
        <Input placeholder='Search Customer name/inv name' style={{width: '300px'}} />
        <TableSection title=''/>    
    </div>
  )
}

export default ApprovalComponent