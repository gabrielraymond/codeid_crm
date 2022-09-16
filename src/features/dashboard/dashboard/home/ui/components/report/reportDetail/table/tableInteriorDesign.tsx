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
	id: number | string;
}

const data: DataType[] = [
	{
		key: '1',
		name: 'John Brown',
		revenue: 20000000,
		target: 100000000,
		id: 3,
	},
];

const TableInteriorDesign: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const columns: ColumnsType<DataType> = [
		{
			title: 'ID Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Revenue',
			dataIndex: 'revenue',
			key: 'revenue',
		},		
		{
			title: 'Action',
			dataIndex: 'id',
			key: 'action',
			render: () => (
				<Link href={'/dashboard/report/interior-design/interior-design-detail'}>
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

export default TableInteriorDesign;
