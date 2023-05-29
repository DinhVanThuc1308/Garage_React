import { Space, Table, Modal } from 'antd';
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
    value: 'All',
    label: 'All',
  },
  {
    value: false,
    label: 'Active',
  },
  {
    value: true,
    label: 'Inactive',
  },
];

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [deletingItemId, setDeletingItemId] = useState(null);



  const handleDelete = async (id) => {
    setDeletingItemId(id);
    setConfirmModalVisible(true);
  };

  const handleConfirmDelete = async () => {
    await axiosInstance.delete(`users/${deletingItemId}`);
    setDeletingItemId(null);
    setConfirmModalVisible(false);
    callApi();
  };

  const handleCancelDelete = () => {
    setDeletingItemId(null);
    setConfirmModalVisible(false);
  };

  const callApi = async () => {
    const responseData = await axiosInstance.get('garages', {
      params: {
        'filters[$or][0][name][$contains]': search,
        'filters[$or][1][email][$contains]': search,

        'pagination[page]': 1,
        'pagination[pageSize]': 10,
        // 'filters[owner][id][$eq]': 1,

        populate: 'owner, services'
      },
    });

    console.log(responseData);

    const users = responseData.data.map(user => ({
      id: user.id,
      name: user.attributes.name,
      email: user.attributes.email,
      phoneNumber: user.attributes.phoneNumber,
      ownerName: user.attributes.owner.data?.attributes?.fullname,
      status: user.status === 'active' ? 'Active' : 'Inactive',
      action: (
        <Space key={user.id} size="middle">
          <Link to={`/Garage_manager_details/${user.id}`}>
            <img src={eye} style={{ width: '14.05px', height: '16.03px' }} />

          </Link>
          <Link to={`/update_management/${user.id}`}>
            <img src={edit} />
          </Link>
          <button
            style={{ border: 'none', backgroundColor: '#fff' }}
            className="btn_xoa"
            onClick={() => handleDelete(user.id)}
          >
            <img src={deleteIcon} />
          </button>
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
      title: 'Garage Owner',
      dataIndex: 'ownerName',
      key: 'ownerName',
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
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ fontFamily: 'Poppins', fontSize: 20 }}>All Garages </h1>
        <Button
          style={{
            backgroundColor: '#8767E1',
            width: '120px',
            color: '#fff',
            height: '42px',
            margin: '0 20px',
          }}
          className="custom-button"
        >
          <Link to="/create_garage">Add Garages</Link>
        </Button>
      </div>
      <div className="div">
        <Space
          direction="vertical"
          size="middle"
          className="UI_search"
          style={{ paddingBottom: '70px', height: '48px' }}

        >
          <span>
            <Space.Compact style={{ width: '500px' }} size='large'>
              <Select
                defaultValue="Name"
                options={options}
                onClick={() => {
                  callApi();
                }}
                style={{ width: '30%' }}
                size='large'
              />
              <Input
                placeholder="Search"
                suffix={<SearchOutlined />}
                style={{ width: '70%' }}
                value={search}
                onChange={e => setSearch(e.target.value)}
                size='large'
              />
            </Space.Compact>
            <Select
              defaultValue="Status"
              onChange={e => setStatus(e)}
              options={options2}
              style={{ marginLeft: '10px', width: '150px' }}
              size='large'
            />



          </span>
        </Space>
        <Table columns={columns} dataSource={data} />
        <Modal
          visible={confirmModalVisible}
          onOk={handleConfirmDelete}
          onCancel={handleCancelDelete}
          okText="Confirm"
          cancelText="Cancel"
          centered
        >
          <p>Are you sure you want to delete this item?</p>
        </Modal>
      </div>
    </>
  );
}

export default App;