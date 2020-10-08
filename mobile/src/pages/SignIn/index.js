import React, {useRef, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {signInRequest} from '~/store/modules/auth/actions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as Animatable from 'react-native-animatable';
import {
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

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
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  const [dataEmail1, setDataEmail1] = useState({
    checkEmail1: false,
  });
  const [dataPass1, setDataPass1] = useState({
    checkPass1: false,
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

  function updatePass() {
    setDataPass1({
      checkPass1: !dataPass1.checkPass1,
    });
  }

  return (
    <Container>
      <StatusBar backgroundColor="#63c2d1" barStyle="light-content" />
      <Header>
        <AnimatedWelcome useNativeDriver animation="fadeIn" duration={1500}>
          Bem Vindo (a)
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
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          {dataEmail1.checkEmail1 ? (
            <Animatable.View useNativeDriver animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </Form>

        <TitleForm style={{marginTop: 35}}> Password </TitleForm>
        <Form>
          <FontAwesome
            style={{marginLeft: 5}}
            name="lock"
            color="#01ab9d"
            size={20}
          />
          <FormInput
            secureTextEntry={!dataPass1.checkPass1 ? true : false}
            placeholder="Insira sua Senha"
            value={password}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={val => {
              setPassword(val);
            }}
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <TouchableOpacity onPress={updatePass}>
            {dataPass1.checkPass1 ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="black" size={20} />
            )}
          </TouchableOpacity>
        </Form>

        <GroupButton>
          <ButtonSignUp onPress={handleSubmit}>
            <Linear>
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                  Login
                </Text>
              )}
            </Linear>
          </ButtonSignUp>
          <ButtonSignUp onPress={() => navigation.navigate('SignUp')}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#01ab9d'}}>
              {' '}
              Inscreva-se{' '}
            </Text>
          </ButtonSignUp>
          <TouchableOpacity onPress={() => navigation.navigate('Reset')}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 15,
                color: '#333333',
                fontWeight: 'bold',
              }}>
              {' '}
              Esqueceu sua Senha?
            </Text>
          </TouchableOpacity>
        </GroupButton>
      </AnimatedBody>
    </Container>
  );
}
