import { Card, Progress } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
	link: string;
	title: string;
	value: string | number;
	target: string | number;
	percentage: number;
}

const ReportCard = (props: Props) => {
	const { link, title, value, target, percentage } = props;
	const router = useRouter();
	const handleClick = () => {
		router.push(link);
	};

	function color(val: any) {
		if (val < 40) return 'red';
		else if (val >= 40) return 'yellow';
		else if (val >= 80) return 'green';
	}
	return (
		<Card
			size="small"
			title={title}
			style={{
				width: '25%',
				padding: '15px',
				borderRadius: '12px',
				margin: '5px',
				cursor: 'pointer',
			}}
			headStyle={{ borderBottom: 'none' }}
			onClick={() => handleClick()}
		>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<h2>{value}</h2>
				{percentage !== 0 && (
					<Progress
						type="circle"
						percent={percentage}
						width={40}
						strokeColor={color(percentage)}
					/>
				)}
			</div>
			{target && <p>Target: {target}</p>}
		</Card>
	);
};

export default ReportCard;
