import { EyeOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
import React, { useState } from 'react';

interface DataType {
	key: string;
	name: string;
	channel: string;
	activity: number;
	id: number | string;
}

const data: DataType[] = [
	{
		key: '1',
		name: 'John Brown',
		channel: 'Dipo',
		activity: 244,
		id: 3,
	},
];

const TableActivity: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const columns: ColumnsType<DataType> = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Channel',
			dataIndex: 'channel',
			key: 'channel',
		},
		{
			title: 'Activity',
			dataIndex: 'activity',
			key: 'activity',
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
		</div>
	);
};

export default TableActivity;
