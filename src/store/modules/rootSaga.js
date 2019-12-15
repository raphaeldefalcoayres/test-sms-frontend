import { all } from 'redux-saga/effects';

import message from './message/sagas';
import number from './number/sagas';

export default function* rootSaga() {
  return yield all([message, number]);
}
