import React from 'react';
import PropTypes from 'prop-types';

import WithBemHelper from 'CommonComponents/WithBemHelper';

class TreeView extends WithBemHelper{

  render(){
    const {
      id,
      getHeader,
      getChildrenIds,
      fetchTree,
    } = this.props;

    const childrenIds = getChildrenIds(id);
    const list = (childrenIds) ? (
      <ul>
      {
        childrenIds.map(id => (
          <TreeView
            key={id}
            id={id}
            getHeader={getHeader}
            getChildrenIds={getChildrenIds}
            fetchTree={fetchTree} />
        ))
      }
      </ul>
    ) : null;

    
    let header = getHeader(id);

    return (
      <div {...this.classes()}>
        {header}
        {list}
      </div>
    );
  }

  shouldComponentUpdate(){
    return true;
  }
}

TreeView.propTypes = {
  id: PropTypes.number,
  getHeader: PropTypes.func.isRequired,
  getChildrenIds: PropTypes.func.isRequired,
  onNodeExpand: PropTypes.func,
  onNodeCollapse: PropTypes.func,
  collapsed: PropTypes.bool,
};

export default TreeView;
