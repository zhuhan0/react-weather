/* global fetch */

import React from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';

import appClasses from './app.css';

const baseURL = 'http://api.openweathermap.org/data/2.5/';
const APIKEY = '00417f5cb17e96e477f40049642cf63f';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: '' };
  }

  handleGetWeather = () => {
    const cityHTTP = this.state.city.split(' ').join('%20');
    fetch(`${baseURL}weather?q=${cityHTTP}&type=accurate&APPID=${APIKEY}`)
      .then(response => response.json())
      .then((json) => {
        console.log(json);
      });
  }

  handleInputChange = (event) => {
    this.setState({ city: event.target.value });
  }

  render() {
    return (
      <div className={appClasses.formContainer} style={{ flexDirection: this.props.flexDirection }}>
        <input
          className={appClasses.input}
          onChange={this.handleInputChange}
          placeholder="San Jose, CA"
          type="text"
        />
        <button className={appClasses.button} onClick={this.handleGetWeather} type="button">
          Get Weather
        </button>
      </div>
    );
  }
}

Form.defaultProps = {
  flexDirection: 'column',
};

Form.propTypes = {
  flexDirection: PropTypes.string,
};

export default Form;
