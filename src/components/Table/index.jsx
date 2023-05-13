import { Space, Table } from 'antd';
import eye from './assets/Icon/eye.png';
import edit from './assets/Icon/Edit.png';
import deleteIcon from './assets/Icon/Vector.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../../shared/services/http-client.js';

import { Button, Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';

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
    value: 'active',
    label: 'done',
  },
];

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const callApi = async () => {
    // const params = {
    //     filters: {
    //         $or: [
    //             { name: { $contains: search } },
    //             { email: { $contains: search } }
    //         ],
    //         owner: { id: { $eq: 1 } }
    //     },
    //     pagination: { page: page, pageSize: 10 },
    //     populate: 'owner,services'
    // };

    const data = await axiosInstance.get('users');
    console.log(data);
    const users = data.map(user => ({
      id: user.id,
      name: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      status: user.status === 'active' ? 'Active' : 'Inactive',
    }));
    setData([...users]);
  };

  useEffect(() => {
    callApi();
  }, []);

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
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to="/garage_detail">
            <img src={eye} style={{ width: '14.05px', height: '16.03px' }} />
          </Link>
          <Link to="/update_owner">
            <img src={edit} />
          </Link>

          <Link to="/update_management">
            <img src={deleteIcon} />
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <div className="div">
      <Space direction="vertical" size="middle">
        <span>
          <Space.Compact style={{ width: ' 493px' }}>
            <Select defaultValue="Name" options={options} />
            <Input
              placeholder="Search"
              suffix={<SearchOutlined />}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </Space.Compact>
          {/* <Select defaultValue="Status" options={options2} style={{ paddingLeft: '28px', width: ' 296px', }} /> */}
          <Button
            style={{ backgroundColor: '#8767E1', marginLeft: '10px' }}
            onClick={() => {
              callApi();
            }}
          >
            Search
          </Button>
          <Button style={{ backgroundColor: '#8767E1', marginLeft: '160px' }}>
            <Link to="/create_owner">Add owner</Link>
          </Button>
          <Button style={{ backgroundColor: '#8767E1', marginLeft: '160px' }}>
            <Link to="/create_garage">Add garage</Link>
          </Button>
        </span>
      </Space>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default App;
