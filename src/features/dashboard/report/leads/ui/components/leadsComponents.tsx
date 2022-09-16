import { EyeOutlined } from '@ant-design/icons';
import { Button, Select, Space, Table, Tag } from 'antd';
import { Option } from 'antd/lib/mentions';
import Link from 'next/link';
import React, { Fragment } from 'react';
import HeaderPage from 'src/shared/components/HeaderPage';

const { Column, ColumnGroup } = Table;

interface DataType {
	key: React.Key;
	name: string;
	target: number;
	leads: number;
	drop: number;
	cold: number;
	warm: number;
	estimated: number;
	quotation: number;
	invoice: number;
	amount_paid: number;
}

const data: DataType[] = [
	{
		key: '1',
		name: 'Yuli Purwanti',
		target: 2.49,
		leads: 448,
		drop: 0,
		cold: 347,
		warm: 31,
		estimated: 17299500400,
		quotation: 3000000000,
		invoice: 3000000000,
		amount_paid: 838000000,
	},
];

const LeadsComponents: React.FC = () => (
	<Fragment>
		<HeaderPage title="Report Leads" />
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				margin: '1rem 0',
			}}
		>
			<div>
				<Select
					showSearch
					placeholder="Select a person"
					optionFilterProp="children"
					// onChange={onChange}
					// onSearch={onSearch}
					style={{ margin: '0 5px', width: '200px' }}
					filterOption={(input, option) =>
						(option!.children as unknown as string)
							.toLowerCase()
							.includes(input.toLowerCase())
					}
				>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="tom">Tom</Option>
				</Select>
				<Select
					showSearch
					placeholder="Select a person"
					optionFilterProp="children"
					// onChange={onChange}
					// onSearch={onSearch}
					style={{ margin: '0 5px', width: '200px' }}
					filterOption={(input, option) =>
						(option!.children as unknown as string)
							.toLowerCase()
							.includes(input.toLowerCase())
					}
				>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="tom">Tom</Option>
				</Select>
				<Select
					showSearch
					placeholder="Select a person"
					optionFilterProp="children"
					// onChange={onChange}
					// onSearch={onSearch}
					style={{ margin: '0 5px', width: '200px' }}
					filterOption={(input, option) =>
						(option!.children as unknown as string)
							.toLowerCase()
							.includes(input.toLowerCase())
					}
				>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="tom">Tom</Option>
				</Select>
				<Select
					showSearch
					placeholder="Select a person"
					optionFilterProp="children"
					// onChange={onChange}
					// onSearch={onSearch}
					style={{ margin: '0 5px', width: '200px' }}
					filterOption={(input, option) =>
						(option!.children as unknown as string)
							.toLowerCase()
							.includes(input.toLowerCase())
					}
				>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="tom">Tom</Option>
				</Select>
			</div>
			<div>
				<Select
					showSearch
					placeholder="Select a person"
					optionFilterProp="children"
					// onChange={onChange}
					// onSearch={onSearch}
					style={{ margin: '0 5px', width: '200px' }}
					filterOption={(input, option) =>
						(option!.children as unknown as string)
							.toLowerCase()
							.includes(input.toLowerCase())
					}
				>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="tom">Tom</Option>
				</Select>
			</div>
		</div>
		<Table dataSource={data}>
			<ColumnGroup title="User">
				<Column title="Name" dataIndex="name" key="name" />
				<Column title="Target" dataIndex="target" key="target" />
			</ColumnGroup>
			<ColumnGroup title="Total Leads">
				<Column title="Leads" dataIndex="leads" key="leads" />
				<ColumnGroup title="Status">
					<Column title="Drop" dataIndex="drop" key="drop" />
					<Column title="Cold" dataIndex="cold" key="cold" />
					<Column title="Warm" dataIndex="warm" key="warm" />
					<Column title="Estimated" dataIndex="estimated" key="estimated" />
				</ColumnGroup>
				<ColumnGroup title="Hot">
					<Column title="No of LEADS" dataIndex="leads" key="leads" />
					<Column title="QUOTATION" dataIndex="quotation" key="quotation" />
					<Column
						title="Action"
						dataIndex="action"
						key="action"
						render={() => (
							<Link href="/dashboard">
								<a>
									<EyeOutlined /> See Detail
								</a>
							</Link>
						)}
					/>
				</ColumnGroup>
				<ColumnGroup title="Closing Deals">
					<Column title="No of LEADS" dataIndex="leads" key="leads" />
					<Column title="INVOICE PRICE" dataIndex="invoice" key="invoice" />
					<Column
						title="AMOUNT PAID"
						dataIndex="amount_paid"
						key="amount_paid"
					/>
					<Column title="Action" dataIndex="action" key="action" />
				</ColumnGroup>
			</ColumnGroup>
			{/* <Column title="Age" dataIndex="age" key="age" />
			<Column title="Address" dataIndex="address" key="address" />
			<Column
				title="Tags"
				dataIndex="tags"
				key="tags"
				render={(tags: string[]) => (
					<>
						{tags.map((tag) => (
							<Tag color="blue" key={tag}>
								{tag}
							</Tag>
						))}
					</>
				)}
			/>
			<Column
				title="Action"
				key="action"
				render={(_: any, record: DataType) => (
					<Space size="middle">
						<a>Invite {record.lastName}</a>
						<a>Delete</a>
					</Space>
				)}
			/> */}
		</Table>
	</Fragment>
);

export default LeadsComponents;
