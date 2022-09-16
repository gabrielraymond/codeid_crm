import React from 'react'
import CardSection from './cardsection';
import TableSection from './tablesection';
import TitleSection from './titlesection'

interface props {
	customerdetail: any;
}

const CustomerDetailComponent = (props:props) => {
  const {customerdetail} = props;
  return customerdetail === "customerdetail" ? (
    <div>
        <TitleSection />
        <CardSection />
        <TableSection title="Activity"/>
        <TableSection title="Deals"/>
    </div>
  ) : null;
}

export default CustomerDetailComponent