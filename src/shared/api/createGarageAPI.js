import axiosInstance from '../services/http-client';

const createGarageAPI = {
  getGarageServiceList: () => {
    const url = 'garage-services';
    return axiosInstance.get(url);
  },

  getOwnerList: () => {
    const url = 'users';
    return axiosInstance.get(url);
  },

  postGarageData: data => {
    const url = 'garages';
    return axiosInstance.post(url, data);
  },
};

export default createGarageAPI;
