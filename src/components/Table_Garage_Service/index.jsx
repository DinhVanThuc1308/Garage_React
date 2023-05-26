import { Space, Table } from 'antd';
import eye from '../Table/assets/Icon/eye.png';
import edit from '../Table/assets/Icon/Edit.png';
import deleteIcon from '../Table/assets/Icon/Vector.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../../shared/services/http-client.js';

import { Button, Input, Select } from 'antd';
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

    await axiosInstance.delete(`garage-services/${id}`);
    callApi();
  };

  const callApi = async () => {
    const responseData = await axiosInstance.get('garage-services', {
      params: {
        
      },
    });

    console.log(responseData);

    const users = responseData.data.map(user => ({
      id: user.id,
      name: user.attributes.name,
      description: user.attributes.description,
      maxPrice: user.attributes.maxPrice,
      minPrice:user.attributes.minPrice,
      status: user.status === 'active' ? 'Active' : 'Inactive',
      action: (
        <Space key={user.id} size="middle">
          <Link to={`/service_detail/${user.id}`}>
            <img src={eye} style={{ width: '14.05px', height: '16.03px' }} />
          </Link>
          <Link to={`/update_service/${user.id}`}>
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
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Min price',
      dataIndex: 'minPrice',
      key: 'minPrice',
    },
    
    {
      title: 'Max price',
      dataIndex: 'maxPrice',
      key: 'maxPrice',
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
          <Space.Compact style={{ width: '600px' }}>
            <Select
              defaultValue="Name"
              options={options}
              onClick={() => {
                callApi();
              }}
              style={{ width: '40%' }}
            />
            <Input
              placeholder="Search"
              suffix={<SearchOutlined />}
              style={{ width: '60%' }}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </Space.Compact>
          <Select
            defaultValue="Status"
            onChange={e => setStatus(e)}
            options={options2}
            style={{ marginLeft: '50px', width: '150px' }}
          />
          <Button
            style={{
              backgroundColor: '#8767E1',
              marginLeft: '150px',
              width: '120px',
              color: '#fff',
            }}
          >
            <Link to="/create_service">Add Service</Link>
          </Button>
        </span>
      </Space>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default App;
