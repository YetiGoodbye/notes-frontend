import actionType from 'Actions/types';

const layout = (state = {left: 200}, action) => {
  switch(action.type){

    case actionType.RESIZE:
      retrun ({
        ...state,
        left: action.leftWidth,
      });

    default:
      return state;
  }
}

export default layout;
