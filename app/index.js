import React, {Component, PropTypes} from 'react';
import debounce from './utils/debounce';

export default class InfiniteScroll extends Component {
  constructor (props) {
    super(props);    
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
        Hello World
        {this.props.children}
      </div>
    );
  }
}

InfiniteScroll.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};
