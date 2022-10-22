import { Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React from 'react';

const SelectComponent = () => {
	return (
		<Select
			showSearch
			placeholder="Select a person"
			optionFilterProp="children"
			// onChange={onChange}
			// onSearch={onSearch}
            style={{margin:'0 5px', width: '200px'}}
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
	);
};

export default SelectComponent;
