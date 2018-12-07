import {connect} from 'react-redux';

import classNames from 'Config/css/_class-names.scss';
import Component from './Component';

const klassName = "lorem-ipsum-2";
Component.displayName = klassName;

const mapStateToProps = (state) => ({
  klassName,
});

export default connect(mapStateToProps)(Component);
