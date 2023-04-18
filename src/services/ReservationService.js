import http from '../http-common';

const getAll = () => http.get('/api/v1/reservations');

const ReservationService = {
  getAll,
};

export default ReservationService;
