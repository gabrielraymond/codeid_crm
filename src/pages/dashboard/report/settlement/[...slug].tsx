import { useRouter } from 'next/router';
import React from 'react';
import SettlementComponents from 'src/features/dashboard/dashboard/home/ui/components/report/reportDetail/settlement';

interface Params {
	slug: any;
}

const SalesRevenue = () => {
	const router = useRouter();

	const param: any = router.query.slug;
	// console.log(type[0]);
	return <SettlementComponents id={param[0]} date={param[1]} />;
};

export default SalesRevenue;
