import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import TextArea from 'antd/lib/input/TextArea';
import React, { useState, useEffect } from 'react';
import useGetCoaDetail from '../../hooks/useCoaDetail';
import { useCoaEdit } from '../../hooks/useCoaForm';

interface DataType {
	key: React.Key;
	code: any;
	nama_coa: any;
	tipe: any;
	coa_group: any;
}

// const data = [
// 	{
// 		key: '1',
// 		code_coa: '11110001',
// 		nama_coa: 'cash',
// 		tipe: 'Bank dan Kas',
// 		group: 'Kas Besar',
// 	},
// 	{
// 		key: '2',
// 		code_coa: '11110001',
// 		nama_coa: 'cash',
// 		tipe: 'Bank dan Kas',
// 		group: 'Kas Besar',
// 	},
// 	{
// 		key: '3',
// 		code_coa: '11110001',
// 		nama_coa: 'cash',
// 		tipe: 'Bank dan Kas',
// 		group: 'Kas Besar',
// 	},
// ];

const CoaTable = (props: any, { initialData }: { initialData?: any }) => {
	const { fetchQuery, handleOpenDetail } = useGetCoaDetail(initialData);
	const { mutationQuery, handleOnSubmit } = useCoaEdit();
	const {
		data,
		isLoading,
		isError,
		isFetching,
		isLoadingError,
		isSuccess,
	}: any = fetchQuery;

	const [dataDetail, setDataDetail] = useState<any>();

	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isEditOpen, setIsEditOpen] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [loading, setLoading] = useState(false);
	const [modalText, setModalText] = useState('Content of the modal');

	const [coaGroupId, setCoaGroupId] = useState<number>();
	const [code, setCode] = useState<string>();
	const [name, setName] = useState<string>();
	const [coaId, setCoaId] = useState<number>();

	useEffect(() => {
		setCoaGroupId(dataDetail?.coa_group_id);
		setCode(dataDetail?.code);
		setName(dataDetail?.name);
		setCoaId(dataDetail?.id);
	}, [dataDetail]);

	const showModal = async (values: any) => {
		await handleOpenDetail(values);
		// console.log(values);
		setDataDetail(values);
		setIsModalOpen(true);
	};

	const showEdit = async (values: any) => {
		await handleOpenDetail(values);
		// console.log(values);
		setDataDetail(values);
		setIsEditOpen(true);
	};

	const handleOk = () => {
		setModalText('The modal will be closed after two seconds');
		setLoading(true);
		setConfirmLoading(true);
		setTimeout(() => {
			setIsModalOpen(false);
			setConfirmLoading(false);
		}, 2000);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleEditOk = async () => {
		// setModalText('The modal will be closed after two seconds');
		// setLoading(true);
		// setConfirmLoading(true);
		// setTimeout(() => {
		// 	setIsEditOpen(false);
		// 	setConfirmLoading(false);
		// }, 2000);
		console.log(coaGroupId);
		console.log(code);
		console.log(name);
		console.log(coaId);
		await handleOnSubmit(coaGroupId, code, name, coaId);
	};

	const handleEditCancel = () => {
		setIsEditOpen(false);
	};

	const columns: ColumnsType<DataType> = [
		{
			title: 'Code COA',
			dataIndex: 'code',
			// defaultSortOrder: 'descend',
			sorter: (a, b) => a.code - b.code,
		},
		{
			title: 'Nama COA',
			dataIndex: 'name',
			// defaultSortOrder: 'descend',
			sorter: (a, b) => a.nama_coa - b.nama_coa,
		},
		{
			title: 'Tipe',
			dataIndex: 'tipe',
			// defaultSortOrder: 'descend',
			sorter: (a, b) => a.tipe - b.tipe,
		},
		{
			title: 'Group',
			dataIndex: 'coa_group',
			// defaultSortOrder: 'descend',
			sorter: (a, b) => a.coa_group.name.localeCompare(b.coa_group.name),
			render: (_, { coa_group }) => <>{coa_group.name}</>,
		},
		{
			title: 'Action',
			dataIndex: 'id',
			render: (_, id) => {
				return (
					<div
						style={{
							width: '100px',
							display: 'flex',
							justifyContent: 'space-evenly',
						}}
					>
						{/* <Button
							type="primary"
							style={{
								marginRight: '10px',
								backgroundColor: '#3BB873',
								color: '#fff',
							}}
							onClick={() => showModal(id)}
						>
							Configure
						</Button> */}
						<EyeOutlined onClick={() => showModal(id)} />
						<EditOutlined onClick={() => showEdit(id)} />
					</div>
				);
			},
		},
	];

	const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
		console.log('selectedRowKeys changed: ', selectedRowKeys);
		setSelectedRowKeys(newSelectedRowKeys);
	};

	const rowSelection: TableRowSelection<DataType> = {
		selectedRowKeys,
		onChange: onSelectChange,
		selections: [
			Table.SELECTION_ALL,
			Table.SELECTION_INVERT,
			Table.SELECTION_NONE,
			{
				key: 'odd',
				text: 'Select Odd Row',
				onSelect: (changableRowKeys) => {
					let newSelectedRowKeys = [];
					newSelectedRowKeys = changableRowKeys.filter((_, index) => {
						if (index % 2 !== 0) {
							return false;
						}
						return true;
					});
					setSelectedRowKeys(newSelectedRowKeys);
				},
			},
			{
				key: 'even',
				text: 'Select Even Row',
				onSelect: (changableRowKeys) => {
					let newSelectedRowKeys = [];
					newSelectedRowKeys = changableRowKeys.filter((_, index) => {
						if (index % 2 !== 0) {
							return true;
						}
						return false;
					});
					setSelectedRowKeys(newSelectedRowKeys);
				},
			},
		],
	};

	return (
		<>
			<Table
				// rowSelection={rowSelection}
				columns={columns}
				dataSource={props.data.data}
			/>
			<Modal
				title={
					<>
						<h4>Coa Detail</h4>
						<p style={{ fontSize: '12px' }}>Code Akun :{dataDetail?.code}</p>
					</>
				}
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button key="back" onClick={handleCancel}>
						Return
					</Button>,
					<Button
						key="submit"
						type="primary"
						loading={loading}
						onClick={handleOk}
					>
						Submit
					</Button>,
				]}
			>
				<div style={{ marginBottom: '10px' }}>
					<label>Kode</label>
					<Input placeholder="Basic usage" value={dataDetail?.code} disabled />
				</div>
				<div style={{ marginBottom: '10px' }}>
					<label>Nama COA</label>
					<TextArea
						placeholder="Basic usage"
						value={dataDetail?.name}
						rows={4}
						disabled
					/>
				</div>
				<div style={{ marginBottom: '10px' }}>
					<label>Tipe</label>
					<Input placeholder="Basic usage" value={dataDetail?.tipe} disabled />
				</div>
				<div style={{ marginBottom: '10px' }}>
					<label>Group</label>
					<Input
						placeholder="Basic usage"
						value={dataDetail?.coa_group.name}
						disabled
					/>
				</div>
			</Modal>

			<Modal
				title={
					<>
						<h4>Coa Edit</h4>
						<p style={{ fontSize: '12px' }}>Code Akun :{dataDetail?.code}</p>
					</>
				}
				open={isEditOpen}
				onOk={handleEditOk}
				onCancel={handleEditCancel}
				// footer={[
				// 	<Button key="back" onClick={handleCancel}>
				// 		Return
				// 	</Button>,
				// 	<Form.Item>
				// 		<Button
				// 			key="submit"
				// 			type="primary"
				// 			loading={loading}
				// 			htmlType="submit"
				// 			onClick={handleEditOk}
				// 		>
				// 			Submit
				// 		</Button>
				// 	</Form.Item>,
				// ]}
			>
				<Form>
					{/* <label>Kode</label>
					<Form.Item name="code" style={{ marginBottom: '10px' }}>
						<Input style={{ fontSize: '1.05rem' }} value={dataDetail?.code} />
					</Form.Item>
					<label>Nama COA</label>
					<Form.Item name="name" style={{ marginBottom: '10px' }}>
						<TextArea
							style={{ fontSize: '1.05rem' }}
							value={dataDetail?.name}
							rows={4}
						/>
					</Form.Item>
					<label>Group</label>
					<Form.Item name="coa_group_id" style={{ marginBottom: '10px' }}>
						<Input
							style={{ fontSize: '1.05rem' }}
							value={dataDetail?.coa_group.name}
						/>
					</Form.Item> */}
					<div style={{ marginBottom: '10px' }}>
						<label>Kode</label>
						<Input
							placeholder="Basic usage"
							value={code}
							disabled
							onChange={(e) => setCode(e.target.value)}
						/>
					</div>
					<div style={{ marginBottom: '10px' }}>
						<label>Nama COA</label>
						<TextArea
							placeholder="Basic usage"
							value={name}
							rows={4}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div style={{ marginBottom: '10px' }}>
						<label>Tipe</label>
						<Input placeholder="Basic usage" value={dataDetail?.tipe} />
					</div>
					<div style={{ marginBottom: '10px' }}>
						<label>Group</label>
						<Input
							placeholder="Basic usage"
							value={dataDetail?.coa_group.name}
						/>
					</div>
				</Form>
			</Modal>
		</>
	);
};

export default CoaTable;
