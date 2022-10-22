import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

const handleChange = (value: string) => {
	console.log(`selected ${value}`);
};

const OptionSection = () => {
	return (
		<>
			<Select
				defaultValue={'Hallo'}
				style={{ width: 200, margin: '0 16px' }}
				onChange={handleChange}
			>
				<Option value="BUM">BUM</Option>
				<Option value="Channel">Channel</Option>
				<Option value="Sales">Sales</Option>
			</Select>
		</>
	);
};

export default OptionSection;
