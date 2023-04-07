import { Space, Table } from 'antd';
import eye from './assets/Icon/eye.png';
import edit from './assets/Icon/Edit.png';
import deleteIcon from './assets/Icon/Vector.png';
const columns = [
    {
        title: '#',
        dataIndex: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Phone number',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
    },
    {
        title: 'Garage owner',
        dataIndex: 'garageOwner',
        key: 'garageOwner',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: (_, { tags }) => (
    //         <>
    //             {tags.map((tag) => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a><img src={eye} style={{ width: '14.05px', height: '16.03px' }} /></a>
                <a><img src={edit} /></a>
                <a><img src={deleteIcon} /></a>
            </Space>
        ),
    },
];
const data = [
    {
        id: 1,
        name: 'John Brown',
        email: 'abc.ab@gmail.com',
        phoneNumber: '0912234456',
        garageOwner: 'Quang Minh Tran',
        status: 'Active',
    },
    {
        id: 1,
        name: 'John Brown',
        email: 'abc.ab@gmail.com',
        phoneNumber: '0912234456',
        garageOwner: 'Quang Minh Tran',
        status: 'Inactive',
    },


];

const App = () => <Table columns={columns} dataSource={data} pagination={false} />;
export default App;