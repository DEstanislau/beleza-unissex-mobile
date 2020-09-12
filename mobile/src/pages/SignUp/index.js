import React, {useRef, useState} from 'react';

import {useDispatch} from 'react-redux';
import {signUpRequest} from '~/store/modules/auth/actions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as Animatable from 'react-native-animatable';
import {
  Container,
  Header,
  Body,
  Form,
  FormInput,
  GroupButton,
  ButtonSignUp,
  Linear,
  TitleForm,
} from './styles';

import {Text, StatusBar, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AnimatedBody = Animatable.createAnimatableComponent(Body);

export default function SignUp({navigation}) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef();
  const identifierRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {
    dispatch(signUpRequest(name, identifier, email, password));
  }

  const [dataEmail1, setDataEmail1] = useState({
    checkEmail1: false,
  });
  const [dataPass1, setDataPass1] = useState({
    checkPass1: false,
  });
  const [dataName1, setDataName1] = useState({
    checkName1: false,
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

  function changeName1(val) {
    if (val.length != 0) {
      setDataName1({
        checkName1: true,
      });
    } else {
      setDataName1({
        checkName1: false,
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

  function changePass() {
    setDataPass1({
      checkPass1: true,
    });
  }

  function updatePass() {
    setDataPass1({
      checkPass1: !dataPass1.checkPass1,
    });
  }

  return (
    <Container>
      <StatusBar backgroundColor="#63c2d1" barStyle="light-content" />
      <Header />
      <ScrollView style={{backgroundColor: '#fff', borderTopRightRadius: 30}}>
        <AnimatedBody useNativeDriver animation="fadeInUpBig">
          <TitleForm> Nome </TitleForm>
          <Form>
            <MaterialIcon
              style={{marginLeft: 5}}
              name="person-outline"
              color="#01ab9d"
              size={20}
            />
            <FormInput
              placeholder="Insira seu Nome"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              value={name}
              onChangeText={val => {
                changeName1(val);
                setName(val);
              }}
              onSubmitEditing={() => emailRef.current.focus()}
            />

            {dataName1.checkName1 ? (
              <Animatable.View useNativeDriver animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </Form>

          <TitleForm style={{marginTop: 35}}> Email </TitleForm>
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
              ref={emailRef}
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
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              ref={identifierRef}
              value={identifier}
              onChangeText={val => {
                changeIdentifier1(val);
                setIdentifier(val);
              }}
              onSubmitEditing={() => passwordRef.current.focus()}
            />

            {dataIdentifier1.checkIdentifier1 ? (
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
              secureTextEntry={dataPass1.checkPass1 ? true : false}
              placeholder="Insira sua Senha"
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChangeText={val => {
                changePass(val);
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
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                  Inscrever-se
                </Text>
              </Linear>
            </ButtonSignUp>

            <ButtonSignUp onPress={() => navigation.navigate('SignIn')}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', color: '#01ab9d'}}>
                {' '}
                Login{' '}
              </Text>
            </ButtonSignUp>
          </GroupButton>
        </AnimatedBody>
      </ScrollView>
    </Container>
  );
}
