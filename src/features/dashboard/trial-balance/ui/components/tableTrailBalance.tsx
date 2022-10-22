import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
	key: string;
	date: string;
	created_by: string;
	periode: string;
	company: string;
	version: string;
	status: string;
}

interface Props {
	setOpen: any;
}

const TableTrailBalance = (props: Props) => {
	// const showModal = () => {
	// 	setOpen(true);
	// };

	const columns: ColumnsType<DataType> = [
		{
			title: 'date',
			dataIndex: 'date',
			key: 'date',
		},
		{
			title: 'Created By',
			dataIndex: 'created_by',
			key: 'created_by',
		},
		{
			title: 'Periode',
			dataIndex: 'periode',
			key: 'period',
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
		{
			title: 'Action',
			key: 'action',
			render: (_, { key }) => (
				<Space size="middle">
					<Button
						type="primary"
						style={{ fontSize: '14px' }}
						size="small"
						danger
					>
						Delete
					</Button>
					<Button
						type="primary"
						style={{ fontSize: '14px' }}
						size="small"
						onClick={() => props.setOpen(true)}
					>
						Detail
					</Button>
				</Space>
			),
		},
	];

	const data: DataType[] = [
		{
			key: '1',
			date: '22 Oct 2022',
			created_by: '22 Oct 2022',
			periode: '4',
			company: 'PT. xxx1',
			version: '1.1',
			status: 'validate',
		},
		{
			key: '1',
			date: '22 Oct 2022',
			created_by: '22 Oct 2022',
			periode: '4',
			company: 'PT. xxx1',
			version: '1.1',
			status: 'consolidate',
		},
	];
	return <Table columns={columns} dataSource={data} />;
};

export default TableTrailBalance;
