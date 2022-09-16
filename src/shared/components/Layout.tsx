import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
import HeaderComponent from './Header';
import SidebarComponent from './Sidebar';
import { Header } from 'antd/lib/layout/layout';
import type { MenuProps } from 'antd';

const { Content } = Layout;

type Props = {
	children: React.ReactElement;
	isShow: boolean;
};

const LayoutComponent = ({ children, isShow }: Props) => {
	const [isSidebarCollapsed, setIsSideBarCollapsed] = useState(false);
	const onCollapse = (collapsed: boolean) => {
		setIsSideBarCollapsed(collapsed);
	};
	if (!isShow) {
		return children;
	}

	return (
		<Layout style={{ height: '100vh' }}>
			{/* <HeaderComponent
				isShow
				style={{
					marginLeft: isSidebarCollapsed ? 50 : 200,
					position: 'sticky',
					top: 0,
					zIndex: 1,
				}}
			/> */}
			{/* <Header className="header">
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
					items={items1}
				/>
			</Header> */}
			<SidebarComponent
				isSidebarCollapsed={isSidebarCollapsed}
				onCollapse={onCollapse}
			/>
			{/* <Layout className="site-layout"> */}
			{/* <Header
					className="site-layout-background"
					style={{ padding: '0 1.5rem', background: '#fff' }}
				>
					{React.createElement(
						isSidebarCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
						{
							className: 'trigger',
							onClick: () => setIsSideBarCollapsed(!isSidebarCollapsed),
						},
					)}
				</Header> */}
			<Content
				className="site-layout-background"
				style={{
					padding: '1rem 2rem ',
					minHeight: 280,
					overflowY: 'scroll',
				}}
			>
				{children}
			</Content>
			{/* </Layout> */}
			{/* <Layout hasSider>
				<SidebarComponent
					isSidebarCollapsed={isSidebarCollapsed}
					onCollapse={onCollapse}
				/>

				<Layout style={{ background: 'white' }}>
					<Content
						style={{
							padding: 24,
							margin: 0,
							marginLeft: isSidebarCollapsed ? 100 : 200,
						}}
					>
						{children}
					</Content>
				</Layout>
			</Layout> */}
		</Layout>
	);
};

export default LayoutComponent;
