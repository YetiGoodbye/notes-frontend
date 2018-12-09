import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

import WithBemHelper from 'CommonComponents/WithBemHelper';

class Menu extends WithBemHelper{
  render(){
    return (
      <div {...this.classes()}>
        <Link to='/'>Home</Link>
        <Link to='/note/1'>Note 1</Link>
        <Link to='/note/2'>Note 2</Link>
        <Link to='/note/3'>Note 3</Link>
        <Link to='/note/4'>Note 4</Link>
        <Link to='/note/5'>Note 5</Link>
        <Link to='/note/6'>Note 6</Link>
        <Link to='/note/7'>Note 7</Link>
      </div>
    );
  }
}

Menu.propTypes = {};

export default withRouter(Menu);
