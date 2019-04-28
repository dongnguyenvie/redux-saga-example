// eslint-disable-next-line
import { call, all, fork } from "redux-saga/effects";
import { watchFetchTexts, watchAddTexts } from "./textSaga";

/**
 * call chạy 1 saga
 * all chạy nhiều saga cùng 1 thời điểm
 * fork non-blocking call có nghĩa khi gọi saga1 và gọi tiếp saga2. saga mới đang thực hiện mặc dù saga cũ cũng vẫn thực hiện
 */

export default function* rootSaga() {
  // @
  // yield call(watchFetchTexts);

  // @
  yield all([fork(watchFetchTexts), fork(watchAddTexts)]);

  // @
  //  yield fork(watchFetchTexts);
  //  yield fork(watchAddTexts);

}
