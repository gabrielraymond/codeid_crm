import { Card, Col } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
	imgUrl: string;
	url: string;
}

const PromoCard = (props: Props) => {
	const { imgUrl, url } = props;
	const router = useRouter();
	const handleClick = () => {
		console.log('hello there');
		router.push(url);
	};
	return (
		<Col className="gutter-row" span={8}>
			<Card
				onClick={handleClick}
				hoverable
				cover={
					<img
						alt="example"
						height={275}
						style={{ objectFit: 'cover' }}
						src={imgUrl}
					/>
				}
			>
				<Meta title="Europe Street beat" description="www.instagram.com" />
			</Card>
		</Col>
	);
};

export default PromoCard;
