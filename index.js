import React, { Component } from 'react';
import { render } from 'react-dom';
import TimeAgo from 'react-timeago';

class App extends Component {
  render() {
    return (
      <div>
        <TimeAgo date={Date.now()} formatter={(value, unit, suffix) => {
          switch (unit) {
            case 'second':
              return value + ' ' + unit + (value > 1 ? 's' : '') + ' ' + suffix;
            case 'minute':
              return value + ' ' + unit + (value > 1 ? 's' : '') + ' ' + suffix;
            case 'hour':
              return value + ' ' + unit + (value > 1 ? 's' : '') + ' ' + suffix;
            case 'day':
              return value + ' ' + unit + (value > 1 ? 's' : '') + ' ' + suffix;
            case 'month':
              return value + ' ' + unit + (value > 1 ? 's' : '') + ' ' + suffix;
            case 'year':
              return value + ' ' + unit + (value > 1 ? 's' : '') + ' ' + suffix;
            case 'decade':
              return value + ' ' + unit + (value > 1 ? 's' : '') + ' ' + suffix;
            default:
              return null; // Hide any other time units
          }
        }} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
