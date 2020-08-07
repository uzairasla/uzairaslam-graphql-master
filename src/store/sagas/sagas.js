import { spawn } from 'redux-saga/effects';
import weatherSaga from './ApiErrors';

export default function* root() {
  yield spawn(weatherSaga);
}
