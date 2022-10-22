import { Layout, Col, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Image from 'next/image';
import React, { Fragment } from 'react';
import FormLogin from 'src/features/dashboard/login/ui/components/FormLogin';
import withPrivateRoute from 'src/shared/libs/withPrivateRoute';

function Home() {
	return (
		<Fragment>
			<Layout>
				<Content style={{ background: 'white' }}>
					<Row style={{ height: '100vh', width: '100%' }}>
						<Col
							style={{
								width: '50%',
								backgroundColor: '#330D54',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<div style={{ textAlign: 'center' }}>
								<Image
									src="/images/amico.png"
									width={550}
									height={440}
									layout={'responsive'}
								/>
								<h1 style={{ color: '#fff', fontSize: '36px' }}>
									Let’s report your financial accounting
								</h1>
								<h3
									style={{
										color: '#fff',
										fontSize: '21px',
										fontWeight: '400',
										width: '80%',
										margin: '0 auto',
									}}
								>
									We accomodate your business to consolidate with many branch
								</h3>
							</div>
						</Col>
						<Col
							style={{
								width: '50%',
								padding: '1rem',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								// border: '1px solid #000',
								// borderRadius:'25%'
								// boxShadow: `rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 0px`,
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
