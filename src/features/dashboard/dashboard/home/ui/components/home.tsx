import { BellOutlined, UserOutlined } from '@ant-design/icons';
import {
	Avatar,
	Button,
	Card,
	PageHeader,
	Progress,
	Select,
	Space,
	Table,
	Tag,
} from 'antd';
import { Option } from 'antd/lib/mentions';

import React, { Fragment } from 'react';
import CarouselComponent from './carouselBanner';
import HeaderDashboard from './header';
import Header from './header';
import Report from './report/report';
import TopPerformance from './topPerformance/topPerformance';

const Home = () => {
	return (
		<Fragment>
			<HeaderDashboard />
			<Report />
			<TopPerformance />
			{/* <CarouselComponent /> */}
		</Fragment>
	);
};

export default Home;
