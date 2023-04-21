import axios from 'axios';

const getAll = () => axios.get('http://159.223.131.191:3000/api/v1/reservations');
const create = (data) => axios.post('http://159.223.131.191:3000/api/v1/reservations', { reservation: data });

const remove = (id) => axios.delete(`http://159.223.131.191:3000/api/v1/reservations/${id}`);

const ReservationService = {
  getAll,
  create,
  remove,
};

export default ReservationService;
