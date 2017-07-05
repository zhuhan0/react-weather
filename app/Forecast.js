/* global fetch */

import React from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';
import queryString from 'query-string';

import appClasses from './app.css';

const baseURL = 'http://api.openweathermap.org/data/2.5/';
const APIKEY = '00417f5cb17e96e477f40049642cf63f';

export const Day = (props) => {
  const date = props.day.dt;
  const icon = props.day.weather[0].icon;
  return (
    <div className={appClasses.dayContainer} onClick={props.onClick} role="link" tabIndex="-1">
      <img className={appClasses.dayIcon} src={`/app/images/weather-icons/${icon}.svg`} alt="Weather" />
      <h2 className={appClasses.date}>{(new Date(date * 1000)).toDateString()}</h2>
    </div>
  );
};

Day.defaultProps = {
  onClick: () => {},
};

Day.propTypes = {
  day: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.array.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: '', forecast: [], loading: true };
  }

  componentDidMount() {
    const city = queryString.parse(this.props.location.search).city; // eslint-disable-line
    this.fetchWeather(city);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search === nextProps.location.search) { // eslint-disable-line
      return;
    }
    const city = queryString.parse(nextProps.location.search).city; // eslint-disable-line
    this.fetchWeather(city);
  }

  fetchWeather = (city) => {
    this.setState({ city, loading: true });
    const cityHTTP = city.split(' ').join('%20');
    fetch(`${baseURL}forecast/daily?q=${cityHTTP}&type=accurate&APPID=${APIKEY}&cnt=5`)
      .then(response => response.json())
      .then((json) => {
        this.setState({ forecast: json.list, loading: false });
      });
  }

  handleClick = (day) => {
    this.props.history.push({ // eslint-disable-line
      pathname: `/details/${this.state.city}`,
      state: day,
    });
  }

  render() {
    const { city, forecast } = this.state;

    return this.state.loading ?
      <h1 className={appClasses.forecastHeader}>Loading...</h1> :
      (
        <div className={appClasses.forecastContainer}>
          <h1 className={appClasses.forecastHeader}>{city}</h1>
          {forecast.map(day =>
            <Day key={day.dt} day={day} onClick={() => this.handleClick(day)} />,
          )}
        </div>
      );
  }
}

export default Forecast;
