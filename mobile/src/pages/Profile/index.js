import React, {useRef, useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {updateProfileRequest} from '~/store/modules/user/actions';
import {signOut} from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  Title,
  Separator,
  LogoutButton,
} from './styles';

import {ScrollView} from 'react-native';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [identifier, setIdentifier] = useState(profile.identifier);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailRef = useRef();
  const identifierRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        identifier,
        oldPassword,
        password,
        confirmPassword,
      }),
    );
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <ScrollView>
        <Container>
          <Title> Perfil </Title>
          <Form>
            <FormInput
              icon="person-outline"
              autoCorrect={false}
              maxLength={24}
              autoCapitalize="none"
              placeholder="Nome Completo"
              value={name}
              onChangeText={setName}
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
            />

            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu E-mail"
              value={email}
              onChangeText={setEmail}
              ref={emailRef}
              returnKeyType="next"
              onSubmitEditing={() => identifierRef.current.focus()}
            />

            <FormInput
              icon="face"
              editable={false}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="CPF"
              value={identifier}
              onChangeText={setIdentifier}
              ref={identifierRef}
              returnKeyType="next"
              onSubmitEditing={() => oldPasswordRef.current.focus()}
            />

            <Separator />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Senha Atual"
              value={oldPassword}
              onChangeText={setOldPassword}
              ref={oldPasswordRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
            />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Digite Nova Senha"
              value={password}
              onChangeText={setPassword}
              ref={passwordRef}
              returnKeyType="next"
              onSubmitEditing={() => confirmPasswordRef.current.focus()}
            />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Confirme Nova Senha"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              ref={confirmPasswordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
            />

            <SubmitButton onPress={handleSubmit}>
              {' '}
              Atualizar Perfil{' '}
            </SubmitButton>

            <LogoutButton onPress={handleLogout}> Sair </LogoutButton>
          </Form>
        </Container>
      </ScrollView>
    </Background>
  );
}
