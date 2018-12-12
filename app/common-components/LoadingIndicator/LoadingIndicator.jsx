import React from 'react';
import PropTypes from 'prop-types';

import WithBemHelper from 'CommonComponents/WithBemHelper';

class LoadingIndicator extends WithBemHelper{
  render(){
    return (
      <div {...this.classes()}>Loading...</div>
    );
  }
}

LoadingIndicator.propTypes = {};

export default LoadingIndicator;
