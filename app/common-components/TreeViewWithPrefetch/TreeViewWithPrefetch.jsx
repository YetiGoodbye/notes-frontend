import React from 'react';
import PropTypes from 'prop-types';

import WithBemHelper from 'CommonComponents/WithBemHelper';

class TreeViewWithPrefetch extends WithBemHelper{

  render(){
    const {
      header: headerProp,
      itemsList,
    } = this.props;

    let header = null;
    if(headerProp) {
      if(headerProp.text){
        header = (<h6>{headerProp.text}</h6>);
      } else {
        const Header = classFromName(headerProp.name);
        if(headerProp.props) {
          header = <Header {...headerProp.props}/>
        } else {
          header = <Header/>;
        }
      }
    }

    let ul = null;
    if(itemsList && !itemsList.hidden && itemsList.length) {
      ul = (
        <ul>
        {
          itemsList.ids.map(id => (
            <li key={id}>
            <TreeViewWithPrefetch
              {...getItemProps(id)}
              getItemProps={getItemProps}
              />
            </li>
          ))
        }
        </ul>
      );
    }

    return (
      <div {...this.classes()}>
        {header}
        {ul}
      </div>
    );
  }

  shouldComponentUpdate(){
    return true;
  }
}

const pppp = {
  header: PropTypes.oneOfType([
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
    PropTypes.shape({
     name: PropTypes.string.isRequired,
     props: PropTypes.object,
    }),    
  ]),
  itemsList: PropTypes.shape({
    hidden: PropTypes.bool,
    ids: PropTypes.array.isRequired,
  }),
  getHeaderClass: PropTypes.func.isRequired,
  getItemProps: PropTypes.func.isRequired,
};

export default TreeViewWithPrefetch;
