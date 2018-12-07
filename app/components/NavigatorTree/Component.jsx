import {connect} from 'react-redux';
import React from 'react';

import classNames from 'Config/css/_class-names.scss';

import {getNavigatorTreeNode} from 'Selectors';

import TreeView from 'CommonComponents/TreeView';
import NavigatorItem from 'Components/NavigatorItem';


const mapStateToProps = (state) => {
  
  const getHeader = id => {
    const node = getNavigatorTreeNode(state, id);
    if (!node || !node.title) return null;

    return (
      <NavigatorItem
        klassName={classNames.navigatorItem}
        title={node.title}
        noteId={node.noteId} />
    );
  };

  const getChildrenIds = id => {
    const node = getNavigatorTreeNode(state, id);
    return node && node.childrenIds;
  };

  return {
    getHeader,
    getChildrenIds,
  };
};

export default connect(mapStateToProps)(TreeView);
