import React from 'react';
import ReactDOM from 'react-dom';

import PhoneDialer from '../app';

const divs = [
  <div key={1} style={{height: 200, background: 'cornsilk'}}>Big div no 1</div>,
  <div key={2} style={{height: 200, background: 'cornsilk'}}>Big div no 2</div>,
  <div key={3} style={{height: 200, background: 'cornsilk'}}>Big div no 3</div>,
  <div key={4} style={{height: 200, background: 'cornsilk'}}>Big div no 4</div>,
  <div key={5} style={{height: 200, background: 'cornsilk'}}>Big div no 5</div>
];

const heightMessage = 'Infinite Scroll given fixed height of 300px in props';

export default class DialPad extends React.Component {
  constructor () {
    super();
    this.state = {divs: divs};
    this.onCloseDialer = this.onCloseDialer.bind(this);
  }

  onCloseDialer () {
    window.alert("close");
  }

  render () {
    return (
      <div>
        <PhoneDialer
          onCloseDialer={this.onCloseDialer}
        />
      </div>
    );
  }
}



ReactDOM.render(
  <DialPad />,
  document.getElementById('phone_dialer')
);
