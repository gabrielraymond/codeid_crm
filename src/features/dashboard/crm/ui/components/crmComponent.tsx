import React from 'react';
import OptionSection from './optionssection';
import SearchSection from './searchsection';
import TableSection from './tablesection';
import TitleSection from './titlesection';

interface props {
	crm_type: any;
}

const CrmComponent = (props: props) => {
	const { crm_type } = props;
	return crm_type === 'unhandled' ? (
		<div>
			<TitleSection title={crm_type} />
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<SearchSection />
				<div style={{}}>
					<OptionSection />
					<OptionSection />
					<OptionSection />
					<OptionSection />
					<OptionSection />
				</div>
			</div>
			<TableSection />
		</div>
	) : (
		<div>
			<TitleSection title={crm_type} />
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<SearchSection />
				<div style={{}}>
					<OptionSection />
					<OptionSection />
					<OptionSection />
				</div>
			</div>
			<TableSection />
		</div>
	);
};

export default CrmComponent;
