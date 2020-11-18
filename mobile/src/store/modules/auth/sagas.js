import {takeLatest, call, put, all} from 'redux-saga/effects';
import api from '~/services/api';

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
      toast.show('Usuário não pode ser prestador de serviços', {
        type: 'warning',
      });

      return;
    }

    api.defaults.headers.Authorization = `Baerer ${token}`;

    yield put(signInSuccess(token, user));
    toast.show('Login Realizado com Sucesso!', {type: 'success'});
  } catch (err) {
    toast.show('Verifique Email / Senha', {type: 'danger'});
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

    toast.show('Cadastro Realizado com Sucesso!', {type: 'success'});
  } catch (err) {
    toast.show('Cadastro não concluido', {type: 'danger'});

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

    toast.show('Instruções enviadas para o email!', {type: 'success'});

    // history.push('/');
  } catch (err) {
    toast.show('Verifique CPF / Email', {type: 'danger'});
  }
}

export function setToken({payload}) {
  if (!payload) return;
  const {token} = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Baerer ${token}`;
  }
}

// export function signOut() {
//   // history.push('/');
// }

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  // takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/RESET_PASSWORD_REQUEST', resetPasswordRequest),
]);
