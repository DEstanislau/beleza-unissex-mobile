import React, {useEffect, useRef} from 'react';

import {Keyboard} from 'react-native';
import Background from '~/components/Background';
import LoginLogo from '~/assets/img/login.svg';
import * as Animatable from 'react-native-animatable';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({navigation}) {
  const viewRef = useRef();
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
    viewRef.current.fadeOutUpBig();
  }

  function keyboardDidHide() {
    viewRef.current.bounceInDown();
  }

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Animatable.View useNativeDriver ref={viewRef}>
          <LoginLogo width={250} height={250} />
        </Animatable.View>
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu E-mail"
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

          <SubmitButton onPress={handleSubmit}> Acessar </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText> Não tem uma conta? Cadastre-se! </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
