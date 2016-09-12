import React, { Component, PropTypes } from 'react';
// import ReactDOM from 'react-dom';

class PhoneDialer extends React.Component {
  render() {
    return(
      <div>Hello World</div>
    )
  }
}
PhoneDialer.propTypes = {
  next: PropTypes.func,
  style: PropTypes.object,
};
// ReactDOM.render(<PhoneDialer/>, document.getElementById('PhoneDialer'));
