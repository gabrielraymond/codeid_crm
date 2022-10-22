import { useRouter } from 'next/router';
import React from 'react';
import CrmComponent from 'src/features/dashboard/crm/ui/components/crmComponent';

const Crm = () => {
	const router = useRouter();

	const { crm_type }: any = router.query;
	console.log(crm_type);
	return <CrmComponent crm_type={crm_type} />;
};

export default Crm;
