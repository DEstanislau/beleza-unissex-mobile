import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';
// import history from '~/services/history';
import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {email, password} = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const {token, user} = response.data;

    if (user.provider) {
      Alert.alert(
        'Erro no Login',
        'Usuário não pode ser prestador de serviços',
      );
      return;
    }

    api.defaults.headers.Authorization = `Baerer ${token}`;

    yield put(signInSuccess(token, user));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert('Falha na Autenticação', 'verifique seu email / senha');
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    const {name, identifier, email, password} = payload;

    yield call(api.post, 'users', {
      name,
      identifier,
      email,
      password,
    });

    Alert.alert('Cadastro', 'Efetuado com Sucesso!');
    // history.push('/');
  } catch (err) {
    Alert.alert('Falha', 'Verifique se seus dados já estão cadastrados');

    yield put(signFailure());
  }
}

export function* resetPasswordRequest({payload}) {
  try {
    const {identifier, email} = payload;

    yield call(api.put, 'reset', {
      identifier,
      email,
    });

    Alert.alert('Tudo Certo!', 'Instruções enviadas para seu email');

    // history.push('/');
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Verifique seu email / CPF');
  }
}

export function setToken({payload}) {
  if (!payload) return;
  const {token} = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Baerer ${token}`;
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/RESET_PASSWORD_REQUEST', resetPasswordRequest),
]);
