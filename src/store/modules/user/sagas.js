import { takeLatest, all, call, put } from 'redux-saga/effects';

import { Alert } from 'react-native';
import api from '../../../services/api';

import { atualizarContaSucess, atualizarContaError } from './actions';

export function* atualizarConta({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;
    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const resposta = yield call(api.put, 'users', profile);

    Alert.alert('Perfil atualizado :)', 'Perfil atualizado com sucesso');

    yield put(atualizarContaSucess(resposta.data));
  } catch (err) {
    Alert.alert(
      'Erro ao atualizar perfil',
      'Erro ao atualizar seu perfil, verifique seus dados'
    );
    yield put(atualizarContaError());
  }
}

export default all([
  takeLatest('@user/Atualizar_Conta_Request', atualizarConta),
]);
