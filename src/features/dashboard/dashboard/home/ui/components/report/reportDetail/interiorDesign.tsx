import React from 'react';
import { DatePicker, Input } from 'antd';
import HeaderPage from 'src/shared/components/HeaderPage';
import type { DatePickerProps } from 'antd';
import TableBum from './table/tableBum';
import TableStoreLeader from './table/tableStoreLeader';
import TableSales from './table/tableSales';
import TableDetail from './table/tableDetail';
import TableInteriorDesign from './table/tableInteriorDesign';
import TableInteriorDesignDetail from './table/tableInteriorDesignDetail';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
	console.log(date, dateString);
};

interface Props {
	type: string;
	date: string | Date;
}

const InteriorDesignComponent = (props: Props) => {
	const { type, date } = props;
	return (
		<div>
			<HeaderPage title={`Interior Design`} />
			{type === "interior-design" ? (
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Search
					placeholder="input search text"
					onSearch={onSearch}
					enterButton
					style={{ width: '25%' }}
				/>
				<DatePicker onChange={onChange} picker="month" />
			</div>
			) : type === "interior-design-detail" ? (
				<h2>Interior Design Detail</h2>
			) : (
				""
			)}
			
			{type === "interior-design" ? (
				<TableInteriorDesign />
			) : type === "interior-design-detail" ? (
				<TableInteriorDesignDetail />
			) : (
				""
			)}
		</div>
	);
};

export default InteriorDesignComponent;
