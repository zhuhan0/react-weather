import React from 'react'; // eslint-disable-line

import Form from './Form';
import appClasses from './app.css';

const App = () => (
  <div style={{ height: '100%' }}>
    <div className={appClasses.navBar}>
      <h1>
        Weather
      </h1>
      <Form flexDirection="row" />
    </div>
    <div className={appClasses.container} style={{ backgroundImage: 'url(\'./app/images/pattern.svg\')' }}>
      <h1 className={appClasses.header}>
        Enter a City and State
      </h1>
      <Form flexDirection="column" />
    </div>
  </div>
);

export default App;
