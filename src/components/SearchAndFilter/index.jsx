import { Input, Select, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const options = [
    {
        value: 'Name',
        label: 'Name',
    },
    {
        value: 'ID',
        label: 'ID',
    },
];
const options2 = [
    {
        value: 'Status',
        label: 'Status',
    },
    {
        value: 'done',
        label: 'done',
    }
];
const SearchAndFilter = () => (
    <Space direction="vertical" size="middle" >
        <span >
            <Space.Compact style={{ width: ' 493px' }}>
                <Select defaultValue="Name" options={options}  />
                <Input placeholder="Search" suffix={<SearchOutlined />} />
            </Space.Compact>
            <Select defaultValue="Status" options={options2} style={{ paddingLeft: '28px', width: ' 296px',  }} />

        </span>
    </Space>
);
export default SearchAndFilter;