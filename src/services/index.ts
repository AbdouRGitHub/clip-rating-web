import ky from 'ky';

const api = ky.create({
  prefixUrl: import.meta.env.API_URL,
  credentials: 'same-origin',
});

export default api;
