import {connect} from 'react-redux';

import classNames from 'Config/css/_class-names.scss';
import Component from './Component';

const klassName = classNames.header;
Component.displayName = klassName;

const mapStateToProps = (state) => ({
  klassName,
});

export default connect(mapStateToProps)(Component);
