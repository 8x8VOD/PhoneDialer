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
    this.onMute = this.onMute.bind(this);
    this.onVideo = this.onVideo.bind(this);
    this.onDialPad = this.onDialPad.bind(this);
    this.onAddCall = this.onAddCall.bind(this);
    this.onTransferCall = this.onTransferCall.bind(this);
    this.onRecord = this.onRecord.bind(this);
    this.onHold = this.onHold.bind(this);
    this.onPark = this.onPark.bind(this);
    this.onHangup = this.onHangup.bind(this);
  }

  onCloseDialer() {
    window.alert("close");
  }
  onSubmitNumber(phoneNumber) {
    window.console.log(phoneNumber);
    this.setState({ callInfoText: 'CEO - Vikram Verma'});
  }
  onMute(){
    console.log("click onMute");
  }
  onVideo(){
    console.log("click onVideo");
  }
  onDialPad(){
    console.log("click onDialPad");
  }
  onAddCall(){
    console.log("click onAddCall");
  }
  onTransferCall(){
    console.log("click onTransferCall");
  }
  onRecord(){
    console.log("click onRecord");
  }
  onHold(){
    console.log("click onHold");
  }
  onPark(){
    console.log("click onPark");
  }
  onHangup(){
    console.log("click onHangup");
  }
  render () {
    return (
      <div>
        <PhoneDialer
          onCloseDialer={this.onCloseDialer}
          onSubmitNumber={this.onSubmitNumber}
          onMute={this.onMute}
          onVideo={this.onVideo}
          onDialPad={this.onDialPad}
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
