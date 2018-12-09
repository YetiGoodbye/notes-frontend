import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, Link} from 'react-router-dom';

import WithBemHelper from 'CommonComponents/WithBemHelper';


class NavigatorItem extends WithBemHelper{
  render(){
    const {noteId, title} = this.props;
    return (
      <div {...this.classes()}>
        <Link to={'/note/' + noteId}>{title}</Link>
      </div>
    );
  }
}

NavigatorItem.propTypes = {
  noteId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default withRouter(NavigatorItem);
