import { Space, Table } from 'antd';
import eye from '../Table/assets/Icon/eye.png';
import edit from '../Table/assets/Icon/Edit.png';
import deleteIcon from '../Table/assets/Icon/Vector.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../../shared/services/http-client.js';

import { Button, Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './style.css';

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
    value: true,
    label: 'Active',
  },
  {
    value: false,
    label: 'Inactive',
  },
];

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  const handleDelete = async id => {
    // delete user
    await axiosInstance.delete(`users/${id}`);
    // call api
    callApi();
  };

  const callApi = async () => {
    const data = await axiosInstance.get('users', {
      params: {
        'filters[fullname][$contains]': search,
        'filters[blocked][$eq]': false,
      },
    });
    console.log(data);

    const users = data.map(user => ({
      id: user.id,
      name: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      status: user.status === 'active' ? 'Active' : 'Inactive',
      action: (
        <Space key={user.id} size="middle">
          <Link to={`/garage_detail/${user.id}`}>
            <img src={eye} style={{ width: '14.05px', height: '16.03px' }} />
          </Link>
          <Link to={`/update_owner/${user.id}`}>
            <img src={edit} />
          </Link>
          <Button
            style={{ border: 'none' }}
            className="btn_xoa"
            onClick={() => handleDelete(user.id)}
          >
            <img src={deleteIcon} />
          </Button>
        </Space>
      ),
    }));

    setData([...users]);
  };

  useEffect(() => {
    callApi();
  }, [search, status]);

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
      dataIndex: 'action',
    },
  ];

  return (
    <div className="div">
      <Space
        direction="vertical"
        size="middle"
        className="UI_search"
        style={{ paddingBottom: '70px', height: '48px' }}
      >
        <span>
          <Space.Compact style={{ width: '600px' }} size='large'>
            <Select
              defaultValue="Name"
              options={options}
              onClick={() => {
                callApi();
              }}
              style={{ width: '40%' }}
              size='large'

            />
            <Input
              placeholder="Search"
              suffix={<SearchOutlined />}
              style={{ width: '60%' }}
              value={search}
              onChange={e => setSearch(e.target.value)}
              size='large'
            />
          </Space.Compact>
          {/* vieest ther selec gom 2 trang thai bang antd*/}
          <Select
            defaultValue="Status"
            onChange={e => setStatus(e)}
            options={options2}
            style={{ marginLeft: '50px', width: '150px' }}
            size='large'

          />
          <Button
            style={{
              backgroundColor: '#8767E1',
              marginLeft: '150px',
              width: '120px',
              color: '#fff',
              height: '42px',


            }}

          >
            <Link to="/create_owner">Add Owner</Link>
          </Button>
        </span>
      </Space>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default App;
