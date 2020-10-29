import React, {useRef, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import * as Animatable from 'react-native-animatable';
import {Text, StatusBar, ActivityIndicator} from 'react-native';

import {resetPassword} from '~/store/modules/auth/actions';

import {
  Container,
  Header,
  Body,
  Welcome,
  Form,
  FormInput,
  GroupButton,
  ButtonSignUp,
  Linear,
  TitleForm,
} from './styles';

const AnimatedBody = Animatable.createAnimatableComponent(Body);
const AnimatedWelcome = Animatable.createAnimatableComponent(Welcome);

export default function SignIn({navigation}) {
  const dispatch = useDispatch();
  const identifierRef = useRef();

  const [email, setEmail] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit() {
    setIsLoading(true);
    try {
      dispatch(resetPassword(identifier, email));
      setEmail('');
      setIdentifier('');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  const [dataEmail1, setDataEmail1] = useState({
    checkEmail1: false,
  });
  const [dataIdentifier1, setDataIdentifier1] = useState({
    checkIdentifier1: false,
  });

  function changeEmail1(val) {
    if (val.length != 0) {
      setDataEmail1({
        checkEmail1: true,
      });
    } else {
      setDataEmail1({
        checkEmail1: false,
      });
    }
  }

  function changeIdentifier1(val) {
    if (val.length != 0) {
      setDataIdentifier1({
        checkIdentifier1: true,
      });
    } else {
      setDataIdentifier1({
        checkIdentifier1: false,
      });
    }
  }

  return (
    <Container>
      <StatusBar backgroundColor="#63c2d1" barStyle="light-content" />
      <Header>
        <AnimatedWelcome useNativeDriver animation="fadeIn" duration={1500}>
          Recupere Sua Senha
        </AnimatedWelcome>
      </Header>
      <AnimatedBody useNativeDriver animation="fadeInUpBig">
        <TitleForm> Email </TitleForm>
        <Form>
          <MaterialIcon
            style={{marginLeft: 5}}
            name="mail-outline"
            color="#01ab9d"
            size={20}
          />
          <FormInput
            keyboardType="email-address"
            placeholder="Insira seu Email"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            value={email}
            onChangeText={val => {
              changeEmail1(val);
              setEmail(val);
            }}
            onSubmitEditing={() => identifierRef.current.focus()}
          />

          {dataEmail1.checkEmail1 ? (
            <Animatable.View useNativeDriver animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </Form>

        <TitleForm style={{marginTop: 35}}> CPF </TitleForm>
        <Form>
          <MaterialIcon
            style={{marginLeft: 5}}
            name="face"
            color="#01ab9d"
            size={20}
          />
          <FormInput
            placeholder="Insira seu CPF"
            value={identifier}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={val => {
              changeIdentifier1(val);
              setIdentifier(val);
            }}
            ref={identifierRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          {dataIdentifier1.checkIdentifier1 ? (
            <Animatable.View useNativeDriver animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </Form>

        <GroupButton>
          <ButtonSignUp onPress={handleSubmit}>
            <Linear>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                  Recuperar
                </Text>
              )}
            </Linear>
          </ButtonSignUp>
          <ButtonSignUp onPress={() => navigation.navigate('SignIn')}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#01ab9d'}}>
              {' '}
              Voltar{' '}
            </Text>
          </ButtonSignUp>
        </GroupButton>
      </AnimatedBody>
    </Container>
  );
}
