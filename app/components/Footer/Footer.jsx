import React from 'react';
import PropTypes from 'prop-types';

import WithBemHelper from 'CommonComponents/WithBemHelper';

class Footer extends WithBemHelper{
  render(){
    return (
      <div {...this.classes()} >Footer</div>
    );
  }
}

Footer.propTypes = {};

export default Footer;
