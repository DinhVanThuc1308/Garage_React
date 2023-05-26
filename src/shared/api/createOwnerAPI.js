import axiosInstance from '../services/http-client';

const createOwnerAPI = {
  getGarageList: () => {
    const url = 'garages';
    return axiosInstance.get(url);
  },

  postUserData: (data) => {
    const url = 'users';
    return axiosInstance.post(url, data);
  },
};

export default createOwnerAPI;
