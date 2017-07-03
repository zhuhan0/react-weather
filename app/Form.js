import React from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';

import appClasses from './app.css';

const Form = props => (
  <div className={appClasses.formContainer} style={{ flexDirection: props.flexDirection }}>
    <input className={appClasses.input} type="text" value="San Jose, CA" />
    <button className={appClasses.button} type="button">
      Get Weather
    </button>
  </div>
);

Form.defaultProps = {
  flexDirection: 'column',
};

Form.propTypes = {
  flexDirection: PropTypes.string,
};

export default Form;
