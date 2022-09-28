import React from 'react';
import { Col, Layout, Menu, Row } from 'antd';
import {
	UserOutlined,
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	HomeOutlined,
	PoweroffOutlined,
	ContainerOutlined,
	MailOutlined,
	AppstoreOutlined,
	FieldTimeOutlined,
	FileDoneOutlined,
	PercentageOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	MenuOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Link from 'next/link';
import {
	DASHBOARD_HELLO,
	DASHBOARD_LOGIN,
	DASHBOARD_TABLE,
} from '../constants/path';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const { SubMenu } = Menu;
const { Sider } = Layout;

type Props = {
	menu?: any;
	isSidebarCollapsed: boolean;
	onCollapse: any;
	setIsSideBarCollapsed: any;
};

const items = [
	{ label: 'Home', key: '/dashboard', icon: <HomeOutlined /> },
	{
		label: 'Approval',
		key: 'approval',
		icon: <FieldTimeOutlined />,
		children: [
			{
				label: 'Need My Approval',
				key: '/dashboard/approval/needmyapproval',
			},
			{
				label: 'Approved',
				key: '/dashboard/approval/Approved',
			},
			{
				label: 'Rejection',
				key: '/dashboard/approval/Rejection',
			},
			{
				label: 'All',
				key: '/dashboard/approval/All',
			},
		],
	},
	{
		label: 'Report',
		key: 'Report',
		icon: <FileDoneOutlined />,
		children: [
			{
				label: 'Leads',
				key: '/dashboard/report/leads',
			},
			{
				label: 'Brands',
				key: '/dashboard/report/brands',
			},
		],
	},
	{
		label: 'Produk',
		key: 'Produk',
		icon: <AppstoreOutlined />,
	},
	{
		label: 'Promo',
		key: '/dashboard/promo-categories',
		icon: <PercentageOutlined />,
	},
	{
		label: 'CRM',
		key: 'crm',
		icon: <UserOutlined />,
		children: [
			{
				label: 'Unhandled',
				key: '/dashboard/crm/unhandled',
			},
			{
				label: 'Leads',
				key: '/dashboard/crm/leads',
			},
			{
				label: 'Prospect',
				key: '/dashboard/crm/prospact',
			},
			{
				label: 'Deal',
				key: '/dashboard/crm/deal',
			},
		],
	},
	{
		label: 'COA',
		key: '/dashboard/coa/listing',
		icon: <PercentageOutlined />,
	},
	{ label: 'Logout', key: 'signout', icon: <PoweroffOutlined /> },
];

const SidebarComponent = ({
	menu = [],
	isSidebarCollapsed,
	onCollapse,
	setIsSideBarCollapsed,
}: Props) => {
	const route = useRouter();
	const handleLogout = () => {
		Cookies.remove('user');
		route.replace(DASHBOARD_LOGIN);
	};
	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={isSidebarCollapsed}
			onCollapse={onCollapse}
			width="250"
			style={{ boxShadow: '0 4px 10px rgb(0 0 0 / 15%)', backgroundColor: '#330D54' }}
			theme="dark"

		>
			{/* <div className="logo" /> */}
			<Row justify="space-between" align="middle" style={{ padding: '0.5rem 20px' }}>
				{!isSidebarCollapsed && <Col >
					<h1 style={{ color: '#fff', margin: '0' }}>CONSOLE</h1>

				</Col>}

				<Col style={{color:'#fff', margin:`${isSidebarCollapsed ? '0 auto': '0' }`}}>
					{React.createElement(
						MenuOutlined,
						{
							className: 'trigger',
							onClick: () => setIsSideBarCollapsed(!isSidebarCollapsed),
						},
					)}
				</Col>
			</Row>
			<Menu
				defaultSelectedKeys={['/dashboard']}
				defaultOpenKeys={['/dashboard']}
				mode="inline"
				theme="dark"
				style={{ backgroundColor: '#330D54' }}
				// style={{ position: 'sticky' }}
				onClick={({ key }) => {
					if (key === 'signout') {
						// TODO, sign out feature here
						handleLogout();
					} else {
						route.push(key);
					}
				}}
				// inlineCollapsed={collapsed}
				items={items}
			/>
		</Sider>
	);
};

export default SidebarComponent;
