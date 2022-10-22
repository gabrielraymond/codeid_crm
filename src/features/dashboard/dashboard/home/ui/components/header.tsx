import { BellOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, PageHeader, Popover } from 'antd';
import React from 'react';

const HeaderDashboard = () => {
	return (
		<PageHeader
			className="site-page-header"
			// onBack={() => null}
			title="Dashboard"
			// subTitle="This is a subtitle"
			style={{ padding: '1rem 0', fontSize: '21px', margin: '0 5px' }}
			extra={[
				<Popover
					placement="bottomRight"
					title={<span>Notification</span>}
					content={
						<div>
							<ul style={{ paddingLeft: '20px' }}>
								<li>
									8 Desember | 14:00 PM <br /> User 1 follow up customer one
								</li>
								<li>
									8 Desember | 14:00 PM <br /> User 1 follow up customer one
								</li>
							</ul>
						</div>
					}
				>
					<Badge count={5}>
						<BellOutlined style={{ fontSize: '35px' }} />
					</Badge>
				</Popover>,
				<Avatar
					size={40}
					icon={<UserOutlined />}
					style={{ margin: '0 0 0 10px' }}
				/>,
				<h5 style={{ marginBottom: '0' }}>Gabriel Raymond</h5>,
			]}
		/>
	);
};

export default HeaderDashboard;
