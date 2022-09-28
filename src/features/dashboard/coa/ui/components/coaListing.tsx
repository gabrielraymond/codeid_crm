import { DownloadOutlined } from '@ant-design/icons';
import { Button, Collapse, Input, Select, Space, Table, Tag, Tree } from 'antd';
import React from 'react';
import HeaderPage from 'src/shared/components/HeaderPage';
import type { DataNode, DirectoryTreeProps } from 'antd/es/tree';
import CoaTable from './coaTable';
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const { Search } = Input;
const { Option } = Select;
const { DirectoryTree } = Tree;
const { Column, ColumnGroup } = Table;
const treeData: DataNode[] = [
	{
		title: 'parent 0',
		key: '0-0',
		children: [
			{ title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
			{ title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
		],
	},
	{
		title: 'parent 1',
		key: '0-1',
		children: [
			{ title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
			{ title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
		],
	},
];

interface DataType {
	key: React.Key;
	firstName: string;
	lastName: string;
	age: number;
	address: string;
	tags: string[];
}

const data: DataType[] = [
	{
		key: '1',
		firstName: 'John',
		lastName: 'Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		firstName: 'Jim',
		lastName: 'Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		firstName: 'Joe',
		lastName: 'Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
];

const CoaListing = () => {
	const onSearch = (value: string) => {
		console.log('lol');
	};

	const { Option } = Select;

	const onChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const onSearchSelect = (value: string) => {
		console.log('search:', value);
	};

	const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
		console.log('Trigger Select', keys, info);
	};

	const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
		console.log('Trigger Expand', keys, info);
	};

	const children: React.ReactNode[] = [];
	for (let i = 10; i < 36; i++) {
		children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
	}

	const handleChange = (value: string[]) => {
		console.log(`selected ${value}`);
	};




	return (
		<div>
			<HeaderPage title="COA LISTING" />
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div>
					<Button type="primary" style={{ marginRight: '10px' }}>
						Create New
					</Button>
					<Button
						color='green'
						style={{ borderColor: 'green', color: 'green !important', backgroundColor: 'transparent' }}
					// icon={<DownloadOutlined />}
					>
						Export to Excel
					</Button>


				</div>
				<div>
					<Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
					{/* <Select
						showSearch
						placeholder="Select a person"
						optionFilterProp="children"
						onChange={onChange}
						onSearch={onSearchSelect}
						filterOption={(input, option) =>
							(option!.children as unknown as string)
								.toLowerCase()
								.includes(input.toLowerCase())
						}
						style={{ margin: '0 10px' }}
					>
						<Option value="jack">Jack</Option>
						<Option value="lucy">Lucy</Option>
						<Option value="tom">Tom</Option>
					</Select> */}
					<Select
						mode="multiple"
						allowClear
						style={{ width: 200, margin: '0 10px' }}
						placeholder="Please select"
						defaultValue={['a10', 'c12']}
						onChange={handleChange}
						showArrow
					>
						{children}
					</Select>
					<Select
						showSearch
						placeholder="Select a person"
						optionFilterProp="children"
						onChange={onChange}
						onSearch={onSearchSelect}
						style={{ width: 200 }}
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
			<div
				style={{
					display: 'flex',
					marginTop: '2rem',
					justifyContent: 'space-between',

				}}
			>
				<div style={{ width: '20%' }}>
					{/* <DirectoryTree
						multiple
						defaultExpandAll
						onSelect={onSelect}
						onExpand={onExpand}
						treeData={treeData}
					/> */}
					<Collapse accordion>
						<Panel header="This is panel header 1" key="1">
							<DirectoryTree
								multiple
								defaultExpandAll
								onSelect={onSelect}
								onExpand={onExpand}
								treeData={treeData}
							/>
						</Panel>
						<Panel header="This is panel header 2" key="2">
							<p>{text}</p>
						</Panel>
						<Panel header="This is panel header 3" key="3">
							<p>{text}</p>
						</Panel>
					</Collapse>
				</div>
				<div style={{ width: '79%' }}>
					{/* <Table dataSource={data}>
						<ColumnGroup title="Name">
							<Column
								title="First Name"
								dataIndex="firstName"
								key="firstName"
							/>
							<Column title="Last Name" dataIndex="lastName" key="lastName" />
						</ColumnGroup>
						<Column title="Age" dataIndex="age" key="age" />
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
						/>
					</Table> */}
					<CoaTable />
				</div>
			</div>
		</div>
	);
};

export default CoaListing;
