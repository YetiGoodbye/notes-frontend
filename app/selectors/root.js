import layout from './layout';

const selectors = {
  getLayoutLeft: state => layout.getLeft(state.layout),
};

export default selectors;
