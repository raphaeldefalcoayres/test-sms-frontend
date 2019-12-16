import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { createNumberFailer, createNumberSuccess } from './actions';

export function* createNumber({ payload }) {
  try {
    const number = payload.data;

    const response = yield call(api.post, 'numbers/convert/sms', { number });

    toast.success('Números cadastrados com sucesso!');

    yield put(createNumberSuccess(response.data));
  } catch (error) {
    yield put(createNumberFailer());
    toast.error('Erro ao cadastrar números, confira seus dados!');
  }
}

export default all([takeLatest('@number/CREATE_NUMBER_REQUEST', createNumber)]);
