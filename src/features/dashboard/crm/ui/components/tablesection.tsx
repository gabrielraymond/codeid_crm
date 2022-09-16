import { EyeOutlined, MailOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Space, Table, Tag } from 'antd';
import Link from 'next/link';
import React from 'react';

const { Column, ColumnGroup } = Table;

interface DataType {
	key: React.Key;
	no: number;
	lfp: string;
	customername:string;
	customerfrom: string;
	storelocation: string;
	sales: string;
	priority: string[];
}

const data: DataType[] = [
	{
		key: '1',
		no: 1,
		lfp: 'Nikko',
		customername: 'John Brown',
		customerfrom: 'Jakarta',
		storelocation: 'Medan',
		sales: 'Tommy',
		priority: ['nice', 'developer'],
	},
	{
		key: '2',
		no: 2,
		lfp: 'Aldih',
		customername: 'John Brown',
		customerfrom: 'Jakarta',
		storelocation: 'Medan',
		sales: 'Tommy',
		priority: ['loser'],
	},
	{
		key: '3',
		no: 3,
		lfp: 'Michael',
		customername: 'John Brown',
		customerfrom: 'Jakarta',
		storelocation: 'Medan',
		sales: 'Tommy',
		priority: ['cool', 'teacher'],
	},
	{
		key: '4',
		no: 4,
		lfp: 'Gabriel',
		customername: 'gab Brown',
		customerfrom: 'Jakarta',
		storelocation: 'Medan',
		sales: 'Tommy',
		priority: ['Actived'],
	},
];

const TableSection = () => {
	return (
		<div style={{marginTop: '20px'}}>
			<Table dataSource={data}>
				<Column title="No" dataIndex="no" key="no" />
				<Column
					title="Customer Name"
					dataIndex="customername"
					key="customername"
				/>
				<Column title="Last Follow Up" dataIndex="lfp" key="lfp" />
				<Column
					title="Customer From"
					dataIndex="customerfrom"
					key="customerfrom"
				/>
				<Column
					title="Store Location"
					dataIndex="storelocation"
					key="storelocation"
				/>
				<Column title="Sales" dataIndex="sales" key="sales" />
				<Column title="Priority" dataIndex="priority" key="priority" render={(priority: string[]) => (
					<>
						{priority.map(tags => {
							return(
								<Tag color='green' key={tags}>
								{tags}
							</Tag>
							)
						}
							
						)}	
					</>
				)} />
				<Column title="Action" dataIndex="action" key="action" render={(_) => (
					<Space size="middle">
						<Link href="/dashboard/customerdetail/customerdetail">
							<a><EyeOutlined style={{color: 'blue'}}/></a>
						</Link>
						<a ><WhatsAppOutlined /></a>
						<a><MailOutlined style={{color: 'blue'}}/></a>
						<a><PhoneOutlined style={{color: 'red'}}/></a>
					</Space>
				)} />
			</Table>
		</div>
	);
};

export default TableSection;
