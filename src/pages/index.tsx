import { Layout, Col, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { Fragment } from 'react';
import FormLogin from 'src/features/dashboard/login/ui/components/FormLogin';
import withPrivateRoute from 'src/shared/libs/withPrivateRoute';

function Home() {
	return (
		<Fragment>
			<Layout>
				<Content style={{ background: 'white' }}>
					<Row align="middle" justify="center" style={{ height: '100vh' }}>
						<Col
							style={{
								width: '40%',
								// border: '1px solid #000',
								// borderRadius:'25%'
								boxShadow: `rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 0px`,
							}}
						>
							<FormLogin />
						</Col>
					</Row>
				</Content>
			</Layout>
		</Fragment>
	);
}

export default withPrivateRoute(Home);
