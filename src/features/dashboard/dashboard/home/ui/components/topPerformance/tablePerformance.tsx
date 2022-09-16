import { Progress, Space, Statistic, Table, Tag } from 'antd';
import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { ArrowDownOutlined, EyeOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface DataType {
	key: string;
	percentage: number;
	priority: number;
	target: string;
	value: string;
	model: Model;
}

interface Model {
	name: string;
	channel: Channel;
}

interface Channel {
	name: string;
	id: number;
}

interface Props {
	title: string;
}

const columns: ColumnsType<DataType> = [
	{
		title: 'BUM name',
		dataIndex: 'model',
		key: 'name',
		render: (_, { model }) => <span>{model.name}</span>,
	},
	{
		title: 'Meet Goal',
		dataIndex: 'percentage',
		key: 'percentage',
		render: (_, { percentage }) => (
			<Statistic
				value={percentage}
				precision={2}
				valueStyle={{
					color: percentage > 50 ? '#3f8600' : '#cf1322',
					fontSize: '16px',
				}}
				prefix={<ArrowDownOutlined />}
				suffix="%"
			/>
		),
	},
	{
		title: 'Revenue',
		dataIndex: 'value',
		key: 'value',
	},
	{
		title: 'Target',
		dataIndex: 'target',
		key: 'target',
	},
	{
		title: 'Channel',
		dataIndex: 'model',
		key: 'channel',
		render: (_, { model }) => <p>{model.channel.name}</p>,
	},
	{
		title: 'Action',
		dataIndex: 'model',
		key: 'action',
		render: (_, { model }) => (
			<Link href={'/dashboard/table'}>
				<a><EyeOutlined /> See Detail</a>
			</Link>
		),
	},
	// {
	// 	title: 'Tags',
	// 	key: 'tags',
	// 	dataIndex: 'tags',
	// 	render: (_, { tags }) => (
	// 		<>
	// 			{tags.map((tag) => {
	// 				let color = tag.length > 5 ? 'geekblue' : 'green';
	// 				if (tag === 'loser') {
	// 					color = 'volcano';
	// 				}
	// 				return (
	// 					<Tag color={color} key={tag}>
	// 						{tag.toUpperCase()}
	// 					</Tag>
	// 				);
	// 			})}
	// 		</>
	// 	),
	// },
	// {
	// 	title: 'Action',
	// 	key: 'action',
	// 	render: (_, record) => (
	// 		<Space size="middle">
	// 			<a>Invite {record.name}</a>
	// 			<a>Delete</a>
	// 		</Space>
	// 	),
	// },
];

const data: DataType[] = [
	{
		key: '1',
		percentage: 12,
		priority: 1,
		target: 'Rp 3.100.000.000',
		value: 'Rp 342.342.369',
		model: {
			name: 'Yuniati',
			channel: { name: 'Senayan City', id: 1 },
		},
	},
	{
		key: '2',
		percentage: 60,
		priority: 1,
		target: 'Rp 3.100.000.000',
		value: 'Rp 342.342.369',
		model: {
			name: 'Yuniati',
			channel: { name: 'Senayan City', id: 2 },
		},
	},
];

const TablePerformance = (props: Props) => {
	const { title } = props;
	return (
		<div style={{ margin: '1rem 0' }}>
			<h2>{title}</h2>
			<Table
				columns={columns}
				dataSource={data}
				style={{
					borderRadius: '16px',
				}}
				pagination={false}
			/>
		</div>
	);
};

export default TablePerformance;
