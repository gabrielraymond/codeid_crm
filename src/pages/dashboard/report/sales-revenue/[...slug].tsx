import { useRouter } from 'next/router';
import React from 'react';
import SalesRevenueComponent from 'src/features/dashboard/dashboard/home/ui/components/report/reportDetail/salesRevenue';

interface Params {
	slug: any;
}

const SalesRevenue = () => {
	const router = useRouter();

	const type: any = router.query.slug;
	// console.log(type[0]);
	return <SalesRevenueComponent type={type[0]} date={'22-09-2022'} />;
};

export default SalesRevenue;
