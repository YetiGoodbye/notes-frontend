import {Component} from 'react';
import PropTypes from 'prop-types';

import {bemHelper} from 'Utils';

class WithBemHelper extends Component {
  constructor(props){
    super(props);
    this.classes = props.klassName ?
            bemHelper(props.klassName) :
            () => ({});
  }
}

WithBemHelper.propTypes = {
  klassName: PropTypes.string,
};

export default WithBemHelper;
