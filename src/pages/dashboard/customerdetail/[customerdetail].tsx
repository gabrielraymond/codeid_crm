import { useRouter } from 'next/router'
import React from 'react'
import CustomerDetailComponent from 'src/features/dashboard/customerdetail/ui/components/customerDetailComponent';

const CustomerDetail = () => {
  const router = useRouter()
  const { customerdetail }: any = router.query;
  return <CustomerDetailComponent customerdetail={customerdetail}/>
}

export default CustomerDetail