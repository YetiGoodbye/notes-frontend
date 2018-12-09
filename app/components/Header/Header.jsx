import React from 'react';
import PropTypes from 'prop-types';

import WithBemHelper from 'CommonComponents/WithBemHelper';

class Header extends WithBemHelper{
  render(){
    return (
      <div {...this.classes()}>Header</div>
    );
  }
}

Header.propTypes = {};

export default Header;
