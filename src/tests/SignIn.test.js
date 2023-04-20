import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import SignIn from '../components/SignIn';

it('Login component should render correctly', () => {
  const result = render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <SignIn />
        </Provider>
      </Router>
    </React.StrictMode>,
  );
  expect(result).toMatchSnapshot();
});
