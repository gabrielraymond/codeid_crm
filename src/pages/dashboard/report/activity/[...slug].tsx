import { useRouter } from 'next/router';
import React from 'react';
import ActivityComponent from 'src/features/dashboard/dashboard/home/ui/components/report/reportDetail/activity';

interface Params {
	slug: any;
}

const InteriorDesign = () => {
	const router = useRouter();

	const type: any = router.query.slug;
	// console.log(type[0]);
	return <ActivityComponent type={type[0]} date={'22-09-2022'} />;
};

export default InteriorDesign;
