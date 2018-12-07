import React from 'react';
import {connect} from 'react-redux';

import classNames from 'Config/css/_class-names.scss';

import WithBemHelper from 'CommonComponents/WithBemHelper';
import {fetchNavigatorNode} from 'Actions/navigator';

import NavigatorTree from 'Components/NavigatorTree';

class NotesNavigator extends WithBemHelper{
  render(){
    return (
      <div {...this.classes()}>
        <div {...this.classes('menu')}>
          Navigator Menu
        </div>
        <div {...this.classes('tree')}>
          <NavigatorTree 
            klassName={classNames.navigatorTree}  
            id={0} />
        </div>
      </div>
    );
  }

  componentDidMount (){
    this.props.fetchNavigatorNode(0);
  }
}

const mapDispatchToProps = dispatch => ({
  fetchNavigatorNode: (id) => dispatch(fetchNavigatorNode(id)),
});

export default connect(null, mapDispatchToProps)(NotesNavigator);
