import { EyeOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
import React, { useState } from 'react';

interface DataType {
	key: string;
	name: string;
	revenue: number;
	target: number;
	percentage: number;
	id: number | string;
}

const data: DataType[] = [
	{
		key: '1',
		name: 'John Brown',
		revenue: 20000000,
		target: 100000000,
		percentage: 45,
		id: 3,
	},
];

const TableStoreLeader: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const columns: ColumnsType<DataType> = [
		{
			title: 'Name Store Leader',
			dataIndex: 'name',
			key: 'name',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Revenue',
			dataIndex: 'revenue',
			key: 'revenue',
		},
		{
			title: 'Target',
			dataIndex: 'target',
			key: 'target',
		},
		{
			title: 'Meet Goal',
			dataIndex: 'percentage',
			key: 'percentage',
		},
		{
			title: 'Follow Up',
			dataIndex: 'id',
			key: 'address',
			render: (_, id) => (
				<Button type="primary" onClick={showModal}>
					Open Modal
				</Button>
			),
		},
		{
			title: 'Action',
			dataIndex: 'id',
			key: 'action',
			render: () => (
				<Link href={'/dashboard/report/sales-revenue/sales'}>
					<a>
						<EyeOutlined /> See Detail
					</a>
				</Link>
			),
		},
	];

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<div style={{ margin: '1.5rem 0' }}>
			<Table columns={columns} dataSource={data} />
			<Modal
				title="Basic Modal"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</div>
	);
};

export default TableStoreLeader;
