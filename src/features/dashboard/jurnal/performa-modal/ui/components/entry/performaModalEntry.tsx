import { DatePicker, DatePickerProps, Select, Space, Input } from 'antd';

import React from 'react';
import HeaderPage from 'src/shared/components/HeaderPage';

import { Option } from 'antd/lib/mentions';
import PerformaModalEntryTable from './performaModalEntryTable';

const { Search } = Input;

const PerformaModalEntryComponents = () => {
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

    return (
        <div>
            <HeaderPage title="JPM/XXXX/08/2022" />
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
                            <Select
                                showSearch
                                placeholder="Select a person"
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
            <PerformaModalEntryTable />
        </div>
    );
};

export default PerformaModalEntryComponents;
