export default {
  get: jest.fn().mockResolvedValue({ data: {} }),
  create: jest.fn().mockResolvedValue({ baseURL: 'http://localhost:3000', headers: { 'Content-type': 'application/json' } }),
};
