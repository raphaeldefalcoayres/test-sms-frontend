import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { createMessageFailer, createMessageSuccess } from './actions';

export function* createMessage({ payload }) {
  try {
    const { message } = payload.data;

    const response = yield call(api.post, 'messages/convert/sms', message);

    toast.success('Mensagem criada com sucesso!');

    yield put(createMessageSuccess(response.data));
  } catch (error) {
    yield put(createMessageFailer());
    toast.error('Erro ao cadastrar mensagem, confira seus dados!');
  }
}

export default all([takeLatest('@user/UPDATE_MESSAGE_REQUEST', createMessage)]);
