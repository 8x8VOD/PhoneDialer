import React, {Component, PropTypes} from 'react';
import SwipeableViews from 'react-swipeable-views';
import 'font-awesome-webpack';
import './phonedialer.css';

export default class PhoneDialer extends Component {
  constructor (props) {
    super(props);
    this.state = {
        phonePadIndex: 0
    }
    this.onHangupClick = this.onHangupClick.bind(this);
    this.onCallingClick = this.onCallingClick.bind(this);
  }

  onCallingClick() {
    this.setState({ phonePadIndex: 1 });
  }

  onHangupClick() {
    this.setState({ phonePadIndex: 0 });
  }

  render () {
    const style = {
      height: this.props.height || 'auto',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      ...this.props.style
    };
    return (
      <div style={style}>
      <div className="fabPhoneDialer">
        <div
          className="phonePad"
          style={{ height: '100%' }}
        >
          <SwipeableViews index={this.state.phonePadIndex} >
          <div>
            <div className="close_dialog pull-right" onClick={this.onLeftDialPadClick}>
              <i className="fa fa-plus" />
            </div>
            <div className="inputRow">
              <div className="vod_searchbox">
                <div className="inputRow">
                  <div className="group">
                    <input type="text" className="searchTxt" required />
                    <span className="highlight" />
                    <span className="bar" />
                    <div className="inputLabel">
                      <i className="fa fa-phone" /> Phone Number
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="keyRow">
              <div>1<span>&nbsp;</span></div>
              <div>2<span>ABC</span></div>
              <div>3<span>DEF</span></div>
            </div>
            <div className="keyRow">
              <div>4<span>GHI</span></div>
              <div>5<span>JKL</span></div>
              <div>6<span>MNO</span></div>
            </div>
            <div className="keyRow">
              <div>7<span>PQRS</span></div>
              <div>8<span>TUV</span></div>
              <div>9<span>WXYZ</span></div>
            </div>
            <div className="keyRow">
              <div>*</div>
              <div>0</div>
              <div>#</div>
            </div>
            <div className="keyRow">
              <div className="call" onClick={this.onCallingClick}>
                <i className="fa fa-phone" />
              </div>
            </div>
          </div>
          <div>
            <div className="calling">
              <div className="callstatus">Calling ...</div>
              <div className="callnumber">780 986 5643</div>
              <div className="callinfo">Could be - Suresh Sharma</div>
              <div className="callavator">
                <div id="callingCircle">
                  <i className="fa fa-user callingAvator" />
                </div>
              </div>
              <div className="keyRow">
                <div><i className="fa fa-microphone" /><span>Mute</span></div>
                <div><i className="fa fa-video-camera" /><span>Video</span></div>
                <div><i className="fa fa-ellipsis-h" /><span>More</span></div>
                <div className="hangup" onClick={this.onHangupClick}>
                  <i className="fa fa-phone" />
                  <span>Hangup</span>
                </div>
              </div>
            </div>
          </div>
          </SwipeableViews>
        </div>
      </div>
        {this.props.children}
      </div>
    );
  }
}

PhoneDialer.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};
