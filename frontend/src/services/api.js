import axios from 'axios';

const API_URL = 'http://your-backend-api-url';

export const submitDonation = (donation) => {
  return axios.post(`${API_URL}/donations`, donation);
};

export const submitRequest = (request) => {
  return axios.post(`${API_URL}/requests`, request);
};

// Other API methods as needed
