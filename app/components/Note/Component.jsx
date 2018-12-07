import React from 'react';
import PropTypes from 'prop-types';

import ComponentWithBemHelper from 'Utils/ComponentWithBemHelper';

class Component extends ComponentWithBemHelper{
  render(){
    return (
      <div{...this.classes()}>Component content</div>
    );
  }
}

Component.propTypes = {};

export default Component;
