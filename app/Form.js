import React from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';

import appClasses from './app.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: '' };
  }

  handleInputChange = (event) => {
    this.setState({ city: event.target.value });
  }

  render() {
    const { city } = this.state;

    return (
      <div className={appClasses.formContainer} style={{ flexDirection: this.props.flexDirection }}>
        <input
          className={appClasses.input}
          onChange={this.handleInputChange}
          placeholder="San Jose, CA"
          type="text"
          value={city}
        />
        <button className={appClasses.button} onClick={() => this.props.onSubmit(city)} type="button">
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
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
