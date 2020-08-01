import React, {useEffect, useRef} from 'react';

import Background from '~/components/Background';
import RegisterLogo from '~/assets/img/register.svg';
import * as Animatable from 'react-native-animatable';
import {Keyboard} from 'react-native';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({navigation}) {
  const ViewRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
    };
  }, []);

  function keyboardDidShow() {
    ViewRef.current.fadeOutUpBig();
  }

  function keyboardDidHide() {
    ViewRef.current.bounceInDown();
  }

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Animatable.View useNativeDriver ref={ViewRef}>
          <RegisterLogo width={250} height={250} />
        </Animatable.View>

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu E-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua Senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}> Cadastre-se </SubmitButton>

          <SignLink onPress={() => navigation.navigate('SignIn')}>
            <SignLinkText> Já possui uma conta? Faça Login! </SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
