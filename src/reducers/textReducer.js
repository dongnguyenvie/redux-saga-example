import * as TYPE from "../actions/actionTypes";

const text = [];
const textReducers = (state = text, action) => {
  switch (action.type) {
    case TYPE.FETCH_TEXT_SUCCESS: {
      return action.data;
    }
    case TYPE.FETCH_TEXT_FAIL: {
      return [];
    }
    case TYPE.ADD_TEXT_SUCCESS: {
      return [...state, ...action.data];
    }
    case TYPE.ADD_TEXT_FAIL: {
      return state
    }
    default:
      return state;
  }
};

export default textReducers;
