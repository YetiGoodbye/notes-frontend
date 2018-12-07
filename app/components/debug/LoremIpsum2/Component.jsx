import React from 'react';
import PropTypes from 'prop-types';

import ComponentWithBemHelper from 'Utils/ComponentWithBemHelper';

class Component extends ComponentWithBemHelper{
  render(){
    return (
      <div {...this.classes()}>
        <ul>
          <li>Cras condimentum</li>
          <li>Proin et lacus</li>
          <li>Vestibulum</li>
          <li>Donec elementum</li>
          <li>Suspendisse vel</li>
          <li>Nam convallis</li>
        </ul>
      </div>
    );
  }
}

Component.propTypes = {};

export default Component;
