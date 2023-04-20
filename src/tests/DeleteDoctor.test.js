import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import DeleteDoctor from '../components/DeleteDoctor';

it('Delete screen component should render correctly', () => {
  const result = render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <DeleteDoctor />
        </Provider>
      </Router>
    </React.StrictMode>,
  );
  expect(result).toMatchSnapshot();
});
