import http from '../http-common';

const getAll = () => http.get('api/v1/reservations');
const create = (data) => http.post('api/v1/reservations', data);

const ReservationService = {
  getAll,
  create,
};

export default ReservationService;
