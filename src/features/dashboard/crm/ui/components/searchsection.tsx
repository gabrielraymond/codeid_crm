import { Input } from 'antd';
import React from 'react';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const SearchSection = () => {
	return (
		<div>
			<Search
				placeholder="Input search text"
				onSearch={onSearch}
				style={{ width: '250px' }}
			/>
		</div>
	);
};

export default SearchSection;
