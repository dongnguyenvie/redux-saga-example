import * as TYPE from "../actions/actionTypes";
// saga effects
import { put, takeLatest } from "redux-saga/effects";
import { API } from "./Api";

/**
 * @put dispatch 1 action
 * takeLatest đợi 1 action mới nhất. ví dụ ta spam gửi 1 chục cái action 1 lúc nó chỉ lấy cái cuối cùng
 * */

function* fetchTexts(action) {
  const { quantity } = action;
  console.log(action)

  try {
    const data = yield API.getTextFromApi(quantity);
    yield put({ type: TYPE.FETCH_TEXT_SUCCESS, data: data });
  } catch (error) {
    yield put({ type: TYPE.FETCH_TEXT_FAIL, error });
  }
}

function* addTexts(action) {
  console.log(action)
  const { quantity } = action;
  try {
    const data = yield API.addTextFromApi(quantity);
    console.log(data)
    yield put({ type: TYPE.ADD_TEXT_SUCCESS, data });
  } catch (error) {}
}

export function* watchFetchTexts() {
  yield takeLatest(TYPE.FETCH_TEXT, fetchTexts);
}

export function* watchAddTexts() {
  yield takeLatest(TYPE.ADD_TEXT, addTexts);
}
