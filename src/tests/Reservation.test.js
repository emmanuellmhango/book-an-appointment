import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Reservation from '../components/Reservation';

const reservation = {
  id: 1,
  user_id: 1,
  doctor_id: 1,
  date: '2023-04-20',
  city: 'New York',
};

const doctor = {
  id: 1,
  name: 'John Doe',
};

it('Reservation component should render correctly', () => {
  const onDelete = jest.fn();
  const result = render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <Reservation reservation={reservation} doctor={doctor} onDelete={onDelete} />
        </Provider>
      </Router>
    </React.StrictMode>,
  );
  expect(result).toMatchSnapshot();
});
