import React from 'react';

interface data{
	title:string;
}

const TitleSection = (props:data) => {
	return (
		<div>
			<h2>Customer - {props.title}</h2>
		</div>
	);
};

export default TitleSection;
