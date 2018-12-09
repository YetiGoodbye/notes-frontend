import React from 'react';
import PropTypes from 'prop-types';

import WithBemHelper from 'CommonComponents/WithBemHelper';

class Component extends WithBemHelper{
  render(){
    return (
      <div {...this.classes()}>Component content</div>
    );
  }
}

Component.propTypes = {};

export default Component;
