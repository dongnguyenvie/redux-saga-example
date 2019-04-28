import * as TYPE from "./actionTypes";

// Action send by person
export const addTextAction = quantity => {
  return {
    type: TYPE.ADD_TEXT,
    quantity
  };
};

export const fetchTextAction = quantity => {
  return {
    type: TYPE.FETCH_TEXT,
    quantity
  };
};

// Action send by redux-saga
export const fetchTextSuccessAction = data => {
  return {
    type: TYPE.FETCH_TEXT_SUCCESS,
    data
  };
};

export const fetchFailedAction = error => ({
  type: TYPE.FETCH_TEXT_FAIL,
  error
});
