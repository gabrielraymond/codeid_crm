import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import HeaderPage from 'src/shared/components/HeaderPage';
import PromoCard from './promoCard';

const PromoCategories = () => {
	return (
		<div>
			<HeaderPage title="Promo Categories" />
			<Row
				gutter={[
					{ xs: 8, sm: 16, md: 24, lg: 32 },
					{ xs: 8, sm: 16, md: 24, lg: 32 },
				]}
			>
				<PromoCard
					url="/dashboard/promo-categories/12"
					imgUrl="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
				/>
				<PromoCard
					url="/dashboard/promo-categories/12"
					imgUrl="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
				/>
				<PromoCard
					url="/dashboard/promo-categories/12"
					imgUrl="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
				/>
				<PromoCard
					url="/dashboard/promo-categories/12"
					imgUrl="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
				/>
				<PromoCard
					url="/dashboard/promo-categories/12"
					imgUrl="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
				/>
			</Row>
		</div>
	);
};

export default PromoCategories;
