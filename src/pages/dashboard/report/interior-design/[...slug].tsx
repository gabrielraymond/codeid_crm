import { useRouter } from 'next/router';
import React from 'react';
import InteriorDesignComponent from 'src/features/dashboard/dashboard/home/ui/components/report/reportDetail/interiorDesign';

interface Params {
	slug: any;
}

const InteriorDesign = () => {
	const router = useRouter();

	const type: any = router.query.slug;
	// console.log(type[0]);
	return <InteriorDesignComponent type={type[0]} date={'22-09-2022'} />;
};

export default InteriorDesign;
