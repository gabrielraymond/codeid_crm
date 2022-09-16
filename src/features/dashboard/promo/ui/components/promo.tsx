import { Row } from 'antd';
import React from 'react';
import HeaderPage from 'src/shared/components/HeaderPage';
import PromoCard from './promoCard';

const Promo = () => {
	return (
		<div>
			<HeaderPage title="Promo" />
			<Row
				gutter={[
					{ xs: 8, sm: 16, md: 24, lg: 32 },
					{ xs: 8, sm: 16, md: 24, lg: 32 },
				]}
			>
				<PromoCard
					url="/dashboard/promo-categories/12/detail"
					imgUrl="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				/>
				<PromoCard
					url="/dashboard/promo-categories/12/detail"
					imgUrl="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				/>
				<PromoCard
					url="/dashboard/promo-categories/12/detail"
					imgUrl="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				/>
				<PromoCard
					url="/dashboard/promo-categories/12/detail"
					imgUrl="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				/>
				<PromoCard
					url="/dashboard/promo-categories/12/detail"
					imgUrl="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				/>
			</Row>
		</div>
	);
};

export default Promo;
