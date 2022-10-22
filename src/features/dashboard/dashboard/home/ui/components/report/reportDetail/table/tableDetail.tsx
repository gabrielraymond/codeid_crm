import { EyeOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
import React, { useState } from 'react';

interface DataType {
	key: string;
	inv: string;
	revenue: number;
	customerName: string;
	id: number | string;
}

const data: DataType[] = [
	{
		key: '1',
		inv: 'INV12312312',
		revenue: 20000000,
		customerName: 'John',
		id: 3,
	},
];

const TableDetail: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const columns: ColumnsType<DataType> = [
		{
			title: 'Invoice',
			dataIndex: 'inv',
			key: 'inv',
			// render: (text) => <a>{text}</a>,
		},
		{
			title: 'Customer Name',
			dataIndex: 'customerName',
			key: 'customerName',
		},
		{
			title: 'Revenue',
			dataIndex: 'revenue',
			key: 'revenue',
		},		
		{
			title: 'Action',
			dataIndex: 'id',
			key: 'address',
			render: (_) => (
                <Space size="middle">
                    <a  onClick={showModal} style={{color:'blue'}}><EyeOutlined /> See Detail</a>
                </Space>
			)
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

export default TableDetail;
