import React from 'react';
import { DatePicker, Input } from 'antd';
import HeaderPage from 'src/shared/components/HeaderPage';
import type { DatePickerProps } from 'antd';
import TableSettlement from './table/tableSettlement';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
	console.log(date, dateString);
};

interface Props {
	id: string | number;
	date: string | Date;
}

const SettlementComponents = (props: Props) => {
	const { id, date } = props;
	return (
		<div>
			<HeaderPage title={`Settlement`} />
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Search
					placeholder="input search text"
					onSearch={onSearch}
					enterButton
					style={{ width: '25%' }}
				/>
				<DatePicker onChange={onChange} picker="month" />
			</div>
			<TableSettlement />
		</div>
	);
};

export default SettlementComponents;
