import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '~/services/api';

import {updateProfileSuccess, updateProfilefailure} from './actions';

export function* updateProfile({payload}) {
  try {
    const {
      name,
      email,
      identifier,
      cep,
      address,
      house_number,
      district,
      city,
      uf,
      ...rest
    } = payload.data;

    const profile = Object.assign(
      {
        name,
        email,
        identifier,
        cep,
        address,
        house_number,
        district,
        city,
        uf,
      },
      rest.oldPassword ? rest : {},
    );

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Tudo Certo!', 'Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Erro ao atualizar perfil', 'Verifique seus dados');

    yield put(updateProfilefailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
