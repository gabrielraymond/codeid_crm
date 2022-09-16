import { PageHeader } from 'antd'
import { useRouter } from 'next/router';
import React from 'react'

interface data{
	title:string;
}

const TitleSection = (props:data) => {
  const router = useRouter()
  return (
    <PageHeader 
        title={<h2>Discount Approval - {props.title}</h2>}
        className='site-page-header'
    />
  )
}

export default TitleSection