import React from 'react'; // eslint-disable-line
import { BrowserRouter, Route } from 'react-router-dom';

import Detail from './Detail';
import Forecast from './Forecast';
import Form from './Form';
import appClasses from './app.css';

const App = () => (
  <BrowserRouter>
    <div style={{ height: '100%' }}>
      <Route
        render={props => (
          <div className={appClasses.navbar}>
            <h1>Weather</h1>
            <Form
              flexDirection="row"
              onSubmit={(city) => {
                props.history.push({ // eslint-disable-line
                  pathname: '/forecast',
                  search: `?city=${city}`,
                });
              }}
            />
          </div>
        )}
      />
      <Route
        exact
        path="/"
        render={props => (
          <div
            className={appClasses.container}
            style={{ backgroundImage: 'url(\'./app/images/pattern.svg\')' }}
          >
            <h1 className={appClasses.homeHeader}>
              Enter a City and State
            </h1>
            <Form
              flexDirection="column"
              onSubmit={(city) => {
                props.history.push({ // eslint-disable-line
                  pathname: '/forecast',
                  search: `?city=${city}`,
                });
              }}
            />
          </div>
        )}
      />
      <Route path="/forecast" component={Forecast} />
      <Route path="/details/:day" component={Detail} />
    </div>
  </BrowserRouter>
);

export default App;
