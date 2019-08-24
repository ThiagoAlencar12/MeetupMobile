import { Alert } from 'react-native';
import { takeLatest, all, call, put } from 'redux-saga/effects';

import { requireSucesso, requireError } from './actions';
import api from '../../../services/api';

export function* Entrar({ payload }) {
  try {
    const { email, password } = payload;

    const resposta = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = resposta.data;

    if (!user) {
      Alert.alert('Erro no login', 'Usuário não encontrado, cadastre-se! :) ');
      return;
    }
    yield put(requireSucesso(token, user));

    // history.push('/listaMeetup');
  } catch (err) {
    Alert.alert(
      'Falha de Autenticação',
      'Usuário não encontrado, verifique seus dados!'
    );
    yield put(requireError());
  }
}
export function* Cadastrar({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    // history.push('/');
    Alert.alert('Sucesso', 'Usuário cadastrado com sucesso! :) ');
  } catch (err) {
    Alert.alert(
      'Falha de Cadastro',
      'Houve um erro no cadastro, contate o suporte!'
    );
    yield put(requireError());
  }
}

export function setarToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function Sair() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setarToken),
  takeLatest('@auth/Entrar_Request', Entrar),
  takeLatest('@auth/Entrar_Cadastro_Request', Cadastrar),
  takeLatest('@auth/Sair_Aplicacao', Sair),
]);
