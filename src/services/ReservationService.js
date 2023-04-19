import http from '../http-common';

const getAll = () => http.get('api/v1/reservations');
const create = (data) => http.post('api/v1/reservations', data);
const remove = (id) => http.delete(`api/v1/reservations/${id}`);

const ReservationService = {
  getAll,
  create,
  remove,
};

export default ReservationService;
