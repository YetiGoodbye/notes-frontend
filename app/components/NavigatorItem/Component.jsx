import React from 'react';
import PropTypes from 'prop-types';

import WithBemHelper from 'CommonComponents/WithBemHelper';



class NavigatorItem extends WithBemHelper{
  render(){
    return (
      <div {...this.classes()}>
        {this.props.title}
      </div>
    );
  }
}

NavigatorItem.propTypes = {
  title: PropTypes.string,
  noteId: PropTypes.number,
};

export default NavigatorItem;
