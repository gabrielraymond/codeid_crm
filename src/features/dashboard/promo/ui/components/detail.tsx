import { Image } from 'antd';
import React from 'react';

const Detail = () => {
	return (
		<div>
			<Image
				width={'100%'}
				height={450}
				style={{ objectFit: 'cover', borderRadius: '8px' }}
				src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
			/>
			<div style={{ margin: '1rem 0' }}>
				<div style={{ margin: '0.5rem 0' }}>
					<h1>Promo name</h1>
					<h4>CORRIDOR SENAYAN CITY 40%</h4>
				</div>
				<div style={{ margin: '0.5rem 0' }}>
					<h1>Period</h1>
					<h4>09 September 2022 - 11 October 2022</h4>
				</div>
				<div style={{ margin: '0.5rem 0' }}>
					<h1>Term and Condition :</h1>
					<h4>CORRIDOR SENAYAN CITY 40% 10 SEPT - 8 OCT 2022</h4>
				</div>
			</div>
		</div>
	);
};

export default Detail;
