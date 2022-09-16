import React from 'react';
import { DatePicker, Input } from 'antd';
import HeaderPage from 'src/shared/components/HeaderPage';
import type { DatePickerProps } from 'antd';

import TableActivity from './table/tableActivity';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
	console.log(date, dateString);
};

interface Props {
	type: string;
	date: string | Date;
}

const ActivityComponent = (props: Props) => {
	const { type, date } = props;
	return (
		<div>
			<HeaderPage title={`Interior Design`} />
			<DatePicker onChange={onChange} picker="month" />
			<TableActivity />
		</div>
	);
};

export default ActivityComponent;
