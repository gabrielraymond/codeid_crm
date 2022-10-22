import { EyeOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
import React, { useState } from 'react';

interface DataType {
	key: string;
	date: string;
	channel: string;
	sales: string;
    revenue: number;
	id: number | string;
}

const data: DataType[] = [
	{
		key: '1',
		date: '02-Sep-2022',
        channel: "Plaza indonesia",
        sales: "Michael",
		revenue: 20000000,
		id: 3,
	},
];

const TableInteriorDesignDetail: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const columns: ColumnsType<DataType> = [
		{
			title: 'Date',
			dataIndex: 'date',
			key: 'date',
		},
        {
			title: 'Channel',
			dataIndex: 'channel',
			key: 'channel',
		},
        {
			title: 'Sales',
			dataIndex: 'sales',
			key: 'sales',
		},
		{
			title: 'Revenue',
			dataIndex: 'revenue',
			key: 'revenue',
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

export default TableInteriorDesignDetail;
