import React, {Component, PropTypes} from 'react';
import SwipeableViews from 'react-swipeable-views';
import 'font-awesome-webpack';
import './phonedialer.css';

export default class PhoneDialer extends Component {
  constructor (props) {
    super(props);
    this.state = {
        phonePadIndex: 0,
        inputValue: '',
        callInfo: props.onCallInfo
    }
    this.onHangupClick = this.onHangupClick.bind(this);
    this.onCallingClick = this.onCallingClick.bind(this);
    this.onModuleCloseDialerClick = this.onModuleCloseDialerClick.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);

    this.onMuteClick = this.onMuteClick.bind(this);
    this.onVideoClick = this.onVideoClick.bind(this);

    this.onDialPadClick = this.onDialPadClick.bind(this);
    this.onAddCallClick = this.onAddCallClick.bind(this);
    this.onTransferCallClick = this.onTransferCallClick.bind(this);
    this.onRecordClick = this.onRecordClick.bind(this);
    this.onHoldClick = this.onHoldClick.bind(this);
    this.onParkClick = this.onParkClick.bind(this);
    this.onHangupClick = this.onHangupClick.bind(this);

    this.onKeyClick = this.onKeyClick.bind(this);
  }

  updateInputValue(evt){
     this.setState({ inputValue: evt.target.value });
  }

  onModuleCloseDialerClick() {
    this.props.onCloseDialer();
  }

  onCallingClick() {
    this.setState({ phonePadIndex: 1 });
    this.props.onSubmitNumber(this.state.inputValue);
  }

  onMuteClick() {
    this.props.onMute();
  }

  onVideoClick() {
    this.props.onVideo();
  }

  onDialPadClick() {
    this.props.onDialPad();
    this.setState({ phonePadIndex: 0 });
  }

  onAddCallClick() {
    this.props.onAddCall();
  }

  onTransferCallClick() {
    this.props.onTransferCall();
  }

  onRecordClick() {
    this.props.onRecord();
  }

  onHoldClick() {
    this.props.onHold();
  }

  onParkClick() {
    this.props.onPark();
  }

  onHangupClick() {
    this.setState({ phonePadIndex: 0 });
  }
  onKeyClick(e) {
    let currentKeyValue = this.state.inputValue + "" + e.currentTarget.dataset.ref;
    this.setState({ inputValue: currentKeyValue });
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
        <div
          className="phonePad"
          style={{ height: '100%' }}
        >
          <SwipeableViews index={this.state.phonePadIndex} >
          <div>
            <div className="close_dialog pull-right" onClick={this.onModuleCloseDialerClick}>
              <i className="fa fa-plus" />
            </div>
            <div className="inputRow">
              <div className="vod_searchbox">
                <div className="inputRow">
                  <div className="group">
                    <input type="text" className="searchTxt" value={this.state.inputValue} onChange={this.updateInputValue} required />
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
              <div data-ref="1" onClick={this.onKeyClick}>1<span>&nbsp;</span></div>
              <div data-ref="2" onClick={this.onKeyClick}>2<span>ABC</span></div>
              <div data-ref="3" onClick={this.onKeyClick}>3<span>DEF</span></div>
            </div>
            <div className="keyRow">
              <div data-ref="4" onClick={this.onKeyClick}>4<span>GHI</span></div>
              <div data-ref="5" onClick={this.onKeyClick}>5<span>JKL</span></div>
              <div data-ref="6" onClick={this.onKeyClick}>6<span>MNO</span></div>
            </div>
            <div className="keyRow">
              <div data-ref="7" onClick={this.onKeyClick}>7<span>PQRS</span></div>
              <div data-ref="8" onClick={this.onKeyClick}>8<span>TUV</span></div>
              <div data-ref="9" onClick={this.onKeyClick}>9<span>WXYZ</span></div>
            </div>
            <div className="keyRow">
              <div data-ref="*" onClick={this.onKeyClick}>*</div>
              <div data-ref="0" onClick={this.onKeyClick}>0</div>
              <div data-ref="#" onClick={this.onKeyClick}>#</div>
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
              <div className="callnumber">{this.state.inputValue}</div>
              <div className="callinfo">{this.props.onCallInfoText}</div>
              <div className="callavator">
                <div id="callingCircle">
                  <i className="fa fa-user callingAvator" />
                </div>
              </div>
              <div className="keyRow">
                <div onClick={this.onMuteClick}><i className="fa fa-microphone" /><span>Mute</span></div>
                <div onClick={this.onVideoClick}><i className="fa fa-video-camera" /><span>Video</span></div>
                <div className="moreEllipsisMenu">
                  <div className="moreMenu moreEllipsisMenuTrans">
                    <ul>
                      <li onClick={this.onDialPadClick}><div><i className="fa fa-th" /></div><div>Dialpad</div></li>
                      <li onClick={this.onAddCallClick}><div><i className="fa fa-plus" /></div><div>Add Call</div></li>
                      <li onClick={this.onTransferCallClick}><div><i className="fa fa-phone" /></div><div>Transfer</div></li>
                      <li onClick={this.onRecordClick}><div><i className="fa fa-dot-circle-o" /></div><div>Record</div></li>
                      <li onClick={this.onHoldClick}><div><i className="fa fa-pause" /></div><div>Hold</div></li>
                      <li onClick={this.onParkClick}><div><i className="fa fa-map-pin" /></div><div>Park</div></li>
                    </ul>

                    <div className="triangle-down"></div>
                    <div className="triangle-down sh"></div>
                  </div>
                  <i className="fa fa-ellipsis-h" />
                  <span>More</span>

                </div>
                <div className="hangup" onClick={this.onHangupClick}>
                  <i className="fa fa-phone" />
                  <span>Hangup</span>
                </div>
              </div>
            </div>
          </div>
          </SwipeableViews>
        </div>
        {this.props.children}
      </div>
    );
  }
}

PhoneDialer.propTypes = {
  onCloseDialer: PropTypes.func,
  onSubmitNumber: PropTypes.func,

  onMute: PropTypes.func,
  onVideo: PropTypes.func,

  onDialPad: PropTypes.func,
  onAddCall: PropTypes.func,
  onTransferCall: PropTypes.func,
  onRecord: PropTypes.func,
  onHold: PropTypes.func,
  onPark: PropTypes.func,
  onHangup: PropTypes.func,

  onCallInfoText: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};
