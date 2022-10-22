import { useRouter } from 'next/router'
import React from 'react'
import ApprovalComponent from 'src/features/dashboard/approval/ui/components/approvalComponent'

const Approval = () => {
  const router = useRouter()
  const {approval}:any = router.query
  return <ApprovalComponent approval={approval}/>
}

export default Approval