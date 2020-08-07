import { takeEvery, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { actions as WeatherActions } from './reducer';

function* apiErrorReceived(action) {
  yield call(toast.error, `Error Received: ${action.payload.error}`);
}

export default function* watchApiError() {
  yield takeEvery(WeatherActions.weatherApiErrorReceived.type, apiErrorReceived);
}
