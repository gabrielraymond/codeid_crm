import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
	key: string;
	date: string;
	noTransaksi: number;
	note: string;
	company: string;
	version: string;
	total: number;
	status: string;
}

const columns: ColumnsType<DataType> = [
	{
		title: 'date',
		dataIndex: 'date',
		key: 'date',
		render: (text) => <a>{text}</a>,
	},
	{
		title: 'Nomor Transaksi',
		dataIndex: 'noTransaksi',
		key: 'noTransaksi',
	},
	{
		title: 'Note',
		dataIndex: 'note',
		key: 'note',
	},
	{
		title: 'Company',
		dataIndex: 'company',
		key: 'company',
	},
	{
		title: 'Version',
		dataIndex: 'version',
		key: 'version',
	},
	{
		title: 'Total',
		dataIndex: 'total',
		key: 'total',
	},

	{
		title: 'Action',
		key: 'action',
		render: (_, { key }) => (
			<Space size="middle">
				<Button type="primary" style={{ fontSize: '14px' }} size="small" danger>
					Delete
				</Button>
				<Button type="primary" style={{ fontSize: '14px' }} size="small">
					Detail
				</Button>
			</Space>
		),
	},
	{
		title: 'Status',
		key: 'status',
		dataIndex: 'status',
		render: (_, { status }) => {
			let color: string = 'red';
			if (status === 'deleted') {
				color = 'red';
			} else if (status === 'confirmed') {
				color = 'green';
			} else if (status === 'consolidate') {
				color = 'blue';
			} else if (status === 'draft') {
				color = 'purple';
			}
			return (
				<Tag color={color} key={status}>
					{status.toUpperCase()}
				</Tag>
			);
		},
	},
];

const data: DataType[] = [
	{
		key: '1',
		date: '27-19-2022',
		noTransaksi: 32,
		note: 'followup',
		company: 'PT x2',
		version: '45',
		total: 50,
		status: 'draft',
	},
];

const TableRua = () => {
	return <Table columns={columns} dataSource={data} />;
};

export default TableRua;
