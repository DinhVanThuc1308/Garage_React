import axiosInstance from "../services/http-client";


const updateOwnerAPI = {
    getGarageList: () => {
        const url = 'garages';
        return axiosInstance.get(url);
    },

    getExistingOwnerData: (id, params) => {
        const url = `users/${id}`;
        return axiosInstance.get(url, { params });
    },

    updateOwnerData: (data, id) => {
        const url = `users/${id}`;
        return axiosInstance.put(url, data);
    },
};

export default updateOwnerAPI;