import { PageHeader } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'

const TitleSection = () => {
  const router = useRouter()
  return (
    <>
        <PageHeader 
            className='site-page-header'
            onBack={() => router.back()}
            title="Customer Detail"
        />
    </>
  )
}

export default TitleSection