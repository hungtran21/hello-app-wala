import { all, put, takeLatest } from "redux-saga/effects";
import { increment, decrement, onDecrement, onIncrement } from "./slice";
function* cong() {
  yield put(increment(10));
}

function* tru() {
  yield put(decrement(20));
}

function* watchCong() {
  yield takeLatest(onIncrement.type, cong);
}

function* watchTru() {
  yield takeLatest(onDecrement.type, tru);
}

export default function* countSaga() {
  yield all([watchCong(), watchTru()]);
}


