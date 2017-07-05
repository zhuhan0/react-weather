import React from 'react'; // eslint-disable-line

import { Day } from './Forecast';
import appClasses from './app.css';

class Detail extends React.Component {
  kelvinToFahrenheit = kelvin => parseInt((((kelvin - 273.15) * 1.8000) + 32.00), 10)

  render() {
    const { state } = this.props.location; // eslint-disable-line

    return (
      <div>
        <Day day={state} />
        <div className={appClasses.detailContainer}>
          <p>{state.city}</p>
          <p>{state.weather[0].description}</p>
          <p>Low: {this.kelvinToFahrenheit(state.temp.min)}℉</p>
          <p>High: {this.kelvinToFahrenheit(state.temp.max)}℉</p>
          <p>Humidity: {state.Humidity}</p>
        </div>
      </div>
    );
  }
}

export default Detail;
