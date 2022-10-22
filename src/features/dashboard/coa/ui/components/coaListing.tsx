import {
	CloudUploadOutlined,
	DownloadOutlined,
	FilterOutlined,
	UploadOutlined,
} from '@ant-design/icons';
import {
	Button,
	Collapse,
	Input,
	message,
	Select,
	Space,
	Table,
	Tag,
	Tree,
	Upload,
} from 'antd';
import React, { useState } from 'react';
import HeaderPage from 'src/shared/components/HeaderPage';
import type { DataNode, DirectoryTreeProps } from 'antd/es/tree';
import CoaTable from './coaTable';
import { useGetCoa, useGetCoaGroup } from '../../hooks/useCoa';
const { Panel } = Collapse;
import type { UploadProps } from 'antd';

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

const props: UploadProps = {
	name: 'file',
	action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
	headers: {
		authorization: 'authorization-text',
	},
	onChange(info) {
		if (info.file.status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (info.file.status === 'done') {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
};

const CoaListing = ({ initialData }: { initialData?: any }) => {
	const { fetchQuery, setSearchVal, setCoaGroupFilter } = useGetCoa(initialData);
	const { fetchQueryCoaGroup } = useGetCoaGroup(initialData);

	const { data, isLoading, isError, error, isSuccess }: any = fetchQuery;

	const coaGroupData = fetchQueryCoaGroup.data;
	const coaGroupIsSuccess = fetchQueryCoaGroup.isSuccess;
	console.log(data);

	const { Option } = Select;

	// const [searchVal, setSearchVal] = useState<string>('');
	const [filterVal, setFilterVal] = useState<string[]>([]);
	const [groupFilter, setGroupFilter] = useState<string>('');

	// seach form
	// const onSearch = (value: string) => {
	// 	console.log(value);
	// 	setSearchVal(value);
	// };

	// select filter
	const handleChange = (value: string[]) => {
		console.log(value);
		setCoaGroupFilter(value);
	};

	// select group
	const onChange = (value: string) => {
		console.log(`selected ${value}`);
		setGroupFilter(value);
	};
	// const onSearchSelect = (value: string) => {
	// 	console.log('search:', value);
	// };

	const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
		console.log('Trigger Select', keys, info);
	};

	const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
		console.log('Trigger Expand', keys, info);
	};

	// const children: React.ReactNode[] = [];
	// for (let i = 10; i < 36; i++) {
	// 	children.push(
	// 		<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>,
	// 	);
	// }

	return (
		<div>
			<div
				style={{
					backgroundColor: '#fff',
					padding: '0 2rem ',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<HeaderPage title="COA LISTING" />
				<div style={{ display: 'flex' }}>
					{/* <Button type="primary" style={{ marginRight: '10px' }}>
						Create New
					</Button> */}

					<Button
						size="large"
						color="green"
						icon={<CloudUploadOutlined />}
						style={{
							borderColor: '#3BB873',
							color: '#3BB873 ',
							backgroundColor: 'transparent',
						}}
						// icon={<DownloadOutlined />}
					>
						Export to Excel
					</Button>
					<Button
						size="large"
						style={{
							marginLeft: '10px',
							backgroundColor: '#3BB873',
							color: '#fff',
						}}
					>
						Create New
					</Button>
				</div>
			</div>
			<div style={{ backgroundColor: '#fff', padding: '0.5rem 2rem 0' }}>
				{/* <Search
					placeholder="Search Here..."
					onSearch={(value) => onSearch(value)}
					style={{
						width: '100%',
						border: '0 0 0 1px',
						borderBottom: '1px solid #000',
					}}
					bordered={false}
				/> */}

				<Input
					placeholder="Search Here..."
					style={{
						width: '100%',
						border: '0 0 0 1px',
						borderBottom: '1px solid #000',
						borderRadius: '0',
					}}
					bordered={false}
					onChange={(e) => setSearchVal(e.target.value)}
				/>
			</div>
			<div
				style={{
					margin: '1rem',
					padding: '1rem 1rem',
					backgroundColor: '#fff',
					borderRadius: '10px',
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<FilterOutlined style={{ fontSize: '18px' }} />
				<Select
					mode="multiple"
					allowClear
					style={{ width: '100%', margin: '0 10px' }}
					placeholder="Filter by"
					onChange={handleChange}
					showArrow
				>
					{coaGroupData &&
						coaGroupData.data.map((data: any) => {
							return <Option key={data.id}>{data.name}</Option>;
						})}
				</Select>
			</div>
			<div style={{ padding: '0 1rem ' }}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<div>
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
					</div>
				</div>
				<div
					style={{
						display: 'flex',
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
							<Panel header="Kas 1" key="1">
								{/* <DirectoryTree
									multiple
									defaultExpandAll
									onSelect={onSelect}
									onExpand={onExpand}
									treeData={treeData}
								/> */}
							</Panel>
							<Panel header="Kas 2" key="2">
								<p>{text}</p>
							</Panel>
							<Panel header="Kas 3" key="3">
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
						{isSuccess && <CoaTable data={data} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoaListing;
