import {
	Button,
	DatePickerProps,
	Input,
	Select,
	Table,
	Modal,
	Tag,
} from 'antd';
import React, { useState } from 'react';
import HeaderPage from 'src/shared/components/HeaderPage';
import { DatePicker, Space } from 'antd';
import { Option } from 'antd/lib/mentions';
import TableRua from './tableRua';

const { Search } = Input;

const MutasiRuaComponents = () => {
	const handleStartDate: DatePickerProps['onChange'] = (date, dateString) => {
		console.log(date, dateString);
	};
	const handleEndDate: DatePickerProps['onChange'] = (date, dateString) => {
		console.log(date, dateString);
	};

	const onChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const onSearch = (value: string) => {
		console.log('lol');
	};

	const children: React.ReactNode[] = [];
	for (let i = 10; i < 36; i++) {
		children.push(
			<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>,
		);
	}

	const onSearchSelect = (value: string) => {
		console.log('search:', value);
	};

	const handleChange = (value: string[]) => {
		console.log(`selected ${value}`);
	};

	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const showModal = () => {
		setOpen(true);
	};

	const handleOk = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setOpen(false);
		}, 3000);
	};

	const handleCancel = () => {
		setOpen(false);
	};
	return (
		<div>
			<HeaderPage title="UPLOAD MUTASI RUA" />
			<div>
				<Button type="primary" style={{ marginRight: '10px' }}>
					Create New
				</Button>
				<Button
					color="green"
					style={{
						borderColor: 'green',
						color: 'green !important',
						backgroundColor: 'transparent',
					}}
					// icon={<DownloadOutlined />}
				>
					Export to Excel
				</Button>
			</div>
			<div style={{ width: '100%', margin: '1.5rem 0' }}>
				<h4>Tanggal Jurnal</h4>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '100%',
					}}
				>
					<div>
						<Space>
							<DatePicker onChange={handleStartDate} placeholder="Start Date" />
							<DatePicker onChange={handleEndDate} placeholder="End Date" />
						</Space>
					</div>
					<div>
						<Space>
							<Search
								placeholder="input search text"
								onSearch={onSearch}
								style={{ width: 200 }}
							/>
							{/* <Select
								mode="multiple"
								allowClear
								style={{ width: 200 }}
								placeholder="Please select"
								
								onChange={handleChange}
								showArrow
							>
								{children}
							</Select> */}
							<Select
								showSearch
								placeholder="Select Company"
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
								<Option value="PT x1">PT x1</Option>
								<Option value="PT x2">PT x2</Option>
								<Option value="PT x3">PT x3</Option>
							</Select>
							<Select
								showSearch
								placeholder="Select COA"
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
								<Option value="100011">100011</Option>
								<Option value="100012">100012</Option>
								<Option value="100013">100013</Option>
							</Select>
							<Select
								showSearch
								placeholder="Group By"
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
						</Space>
					</div>
				</div>
			</div>
			<div>
				<TableRua />
			</div>
		</div>
	);
};

export default MutasiRuaComponents;
