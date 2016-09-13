import React from 'react';
import ReactDOM from 'react-dom';

import PhoneDialer from '../app';

export default class DemoDialPad extends React.Component {
  constructor () {
    super();
    this.state = {
      callInfoText: ""
    };
    this.onCloseDialer = this.onCloseDialer.bind(this);
    this.onSubmitNumber = this.onSubmitNumber.bind(this);
  }

  onCloseDialer() {
    window.alert("close");
  }
  onSubmitNumber(phoneNumber) {
    window.console.log(phoneNumber);
    this.setState({ callInfoText: 'CEO - Vikram Verma'});
  }

  render () {
    return (
      <div>
        <PhoneDialer
          onCloseDialer={this.onCloseDialer}
          onSubmitNumber={this.onSubmitNumber}
          onMute={this.onMute}
          onVideo={this.onVideo}
          onAddCall={this.onAddCall}
          onTransferCall={this.onTransferCall}
          onRecord={this.onRecord}
          onHold={this.onHold}
          onPark={this.onPark}
          onHangup={this.onHangup}
          onCallInfoText={this.state.callInfoText}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <DemoDialPad />,
  document.getElementById('phone_dialer')
);
