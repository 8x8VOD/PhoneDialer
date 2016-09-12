import React from 'react';
import ReactDOM from 'react-dom';

import PhoneDialer from '../app';

export default class DemoDialPad extends React.Component {
  constructor () {
    super();
    this.state = {divs: []};
    this.onCloseDialer = this.onCloseDialer.bind(this);
  }

  onCloseDialer() {
    window.alert("close");
  }
  onSubmitNumber(phoneNumber) {
    window.console.log(phoneNumber);
  }

  render () {
    return (
      <div>
        <PhoneDialer
          onCloseDialer={this.onCloseDialer}
          onSubmitNumber={this.onSubmitNumber}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <DemoDialPad />,
  document.getElementById('phone_dialer')
);
