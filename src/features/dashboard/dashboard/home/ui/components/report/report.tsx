import { Card, Progress } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import ReportCard from './reportCard';
import ReportFilter from './reportFilter';

const Report = () => {
	const router = useRouter();
	const handleClick = () => {
		router.push('/dashboard/activities/cold/1/15-2022');
	};
	return (
		<div className="report">
			<ReportFilter />

			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<ReportCard
					link="/dashboard/report/sales-revenue/bum"
					title="Sales Revenue"
					value={'Rp 5.000.000'}
					target={'Rp 10.000.000'}
					percentage={70}
				/>
				<ReportCard
					link="/dashboard/report/settlement/1/02-2022"
					title="Settlement"
					value={'40'}
					target={'0'}
					percentage={30}
				/>
				<ReportCard
					link="/dashboard/report/interior-design/interior-design"
					title="Interior Design"
					value={'Rp 200.000.000'}
					target={''}
					percentage={0}
				/>
				<ReportCard
					link="/dashboard/report/activity/1/2022-09"
					title="Activity"
					value={'6468'}
					target={''}
					percentage={0}
				/>
			</div>
			<div style={{ display: 'flex' }}>
				<Card
					size="small"
					title="Activity"
					style={{
						width: '50%',
						padding: '15px',
						margin: '20px 5px 20px 0px',
						borderRadius: '12px',
					}}
					headStyle={{ borderBottom: 'none' }}
				>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<h2>Rp. 3.000.000</h2>
						<p>8%</p>
					</div>
				</Card>
				<Card
					size="small"
					title="Total Follow Up"
					style={{
						width: '50%',
						padding: '15px',
						margin: '20px 0 20px 5px',
						borderRadius: '12px',
					}}
					headStyle={{ borderBottom: 'none' }}
				>
					<div
						style={{ display: 'flex', cursor: 'pointer', marginBottom: '10px' }}
						onClick={() => handleClick()}
					>
						<span style={{ width: '60px' }}>Cold</span>
						<Progress percent={30} strokeColor="blue" />
					</div>

					<div
						style={{ display: 'flex', cursor: 'pointer', marginBottom: '10px' }}
						onClick={() => handleClick()}
					>
						<span style={{ width: '60px' }}>Warm</span>
						<Progress percent={50} strokeColor="yellow" />
					</div>

					<div
						style={{ display: 'flex', cursor: 'pointer', marginBottom: '10px' }}
						onClick={() => handleClick()}
					>
						<span style={{ width: '60px' }}>Hot</span>
						<Progress percent={70} strokeColor="red" />
					</div>

					<div
						style={{ display: 'flex', cursor: 'pointer', marginBottom: '10px' }}
						onClick={() => handleClick()}
					>
						<span style={{ width: '60px' }}>Closed</span>
						<Progress percent={90} strokeColor="#0e0e0e" />
					</div>
				</Card>
			</div>
		</div>
	);
};

export default Report;
