import { PageHeader } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
	title: string;
}

const HeaderPage = (props: Props) => {
	const { title } = props;
	const router = useRouter();
	return (
		<>
			<PageHeader
				className="site-page-header"
				onBack={() => router.back()}
				title={title}
				// subTitle="This is a subtitle"
				style={{ padding: '1rem 0', fontSize: '21px', margin: '0 5px' }}
			/>
		</>
	);
};

export default HeaderPage;
