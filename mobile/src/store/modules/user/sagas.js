import {takeLatest, call, put, all} from 'redux-saga/effects';

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

    toast.show('Perfil Atualizado com Sucesso!', {type: 'success'});

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.show('Erro ao atualizar perfil');

    yield put(updateProfilefailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
