import {connect} from 'react-redux';

import classNames from 'Config/css/_class-names.scss';
import Component from './Component';

const klassName = classNames.navigatorItem;

const mapStateToProps = (state) => ({
  klassName,
});

const mapDispatchToProps = (dispatch) => ({
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Component);
