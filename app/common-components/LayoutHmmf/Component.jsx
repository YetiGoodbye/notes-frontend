import React from 'react';
import PropTypes from 'prop-types';

import WithBemHelper from 'CommonComponents/WithBemHelper';

class LyoutHmmf extends WithBemHelper{
  render(){
    const {classes}  = this;
    const {header, menu, main, footer} = this.props;
    return (
      <div {...classes()}>
        <div {...classes('header')}>{ header }</div>
        <div {...classes('menu')  }>{ menu   }</div>
        <div {...classes('main')  }>{ main   }</div>
        <div {...classes('footer')}>{ footer }</div>
        <div {...classes('spacer')}>void</div>
      </div>
    );
  }
}

LyoutHmmf.propTypes = {
  header: PropTypes.node.isRequired,
  menu:   PropTypes.node.isRequired,
  main:   PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default LyoutHmmf;