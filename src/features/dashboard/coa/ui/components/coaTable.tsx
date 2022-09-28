import { Button, Input, Modal, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import React, { useState } from 'react';

interface DataType {
    key: React.Key;
    code_coa: any;
    nama_coa: any;
    tipe: any;
    group: any;
}



const data = [
    {
        key: '1',
        code_coa: '11110001',
        nama_coa: 'cash',
        tipe: 'Bank dan Kas',
        group: 'Kas Besar',
    },
    {
        key: '2',
        code_coa: '11110001',
        nama_coa: 'cash',
        tipe: 'Bank dan Kas',
        group: 'Kas Besar',
    },
    {
        key: '3',
        code_coa: '11110001',
        nama_coa: 'cash',
        tipe: 'Bank dan Kas',
        group: 'Kas Besar',
    }
]

// const data = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//     },
//     {
//         key: '3',
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sidney No. 1 Lake Park',
//     },
//     {
//         key: '4',
//         name: 'Jim Red',
//         age: 32,
//         address: 'London No. 2 Lake Park',
//     },
// ];

const CoaTable = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setLoading(true);
        setConfirmLoading(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const columns: ColumnsType<DataType> = [
        {
            title: 'Code COA',
            dataIndex: 'code_coa',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.code_coa - b.code_coa,
        },
        {
            title: 'Nama COA',
            dataIndex: 'nama_coa',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.nama_coa - b.nama_coa,
        },
        {
            title: 'Tipe',
            dataIndex: 'tipe',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.tipe - b.tipe,
        },
        {
            title: 'Group',
            dataIndex: 'group',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.group - b.group,
        },
        {
            title: 'Action',
            dataIndex: 'code_coa',
            render: (_, data) => {


                return (
                    <>
                        <Button type="primary" style={{ marginRight: '10px' }} onClick={showModal}>
                            Configure
                        </Button>
                        <Modal title={<><h4>Coa Detail</h4><p style={{ fontSize: '12px' }}>Code Akun :{data.code_coa}</p></>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[
                            <Button key="back" onClick={handleCancel}>
                                Return
                            </Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                                Submit
                            </Button>,
                        ]}>
                            <div style={{ marginBottom: '10px' }}>
                                <label>Kode</label>
                                <Input placeholder="Basic usage" />
                            </div>
                            <div style={{ marginBottom: '10px' }}>
                                <label>{data.code_coa}</label>
                                <Input placeholder="Basic usage" value={data.nama_coa} />
                            </div>
                            <div style={{ marginBottom: '10px' }}>
                                <label>Tipe</label>
                                <Input placeholder="Basic usage" value={data.tipe} />
                            </div>
                            <div style={{ marginBottom: '10px' }}>
                                <label>Group</label>
                                <Input placeholder="Basic usage" value={data.group} />
                            </div>
                        </Modal>
                    </>

                )
            },
        },
    ];

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<DataType> = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: changableRowKeys => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: changableRowKeys => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };

    return (
        <>

            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </>
    )
}

export default CoaTable