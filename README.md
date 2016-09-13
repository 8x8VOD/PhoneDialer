<img src="https://www.8x8.com/images/logo.png" alt="8x8 Logo" />

## Phone Dialer Introduction
Welcome to Virtual Office Phone Dialer Module.
This Module is base on ES6 and ReactJS.

## Demo
<img src="https://github.com/8x8VOD/PhoneDialer/blob/master/demos/dialer-ui.gif" alt="demo" height="300px" />

## Installation

```js
package.json

"dependencies": {
  "8x8_PhoneDialer": "https://github.com/8x8VOD/PhoneDialer.git",
}
```

## Usage

```js

import PhoneDialer from '8x8_PhoneDialer';

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

```

## Props
name | type | description
-----|------|------------
**onCloseDialer** | function | A function after user click on the close dialer
**onSubmitNumber(number)** | function | A function after clicked on call button
**onMute** | function |
**onVideo** | function |
**onDialPad** | function |
**onAddCall** | function |  
**onTransferCall** | function |  
**onRecord** | function |  
**onHold** | function |  
**onPark** | function |  
**onHangup** | function |

## Extra

npm run dev

npm run build-demos

npm run prepublish
