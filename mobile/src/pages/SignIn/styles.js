import styled from 'styled-components/native';

import {Platform, TextInput} from 'react-native';
import Button from '~/components/Button';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '~/assets/img/logo.svg';

export const Container = styled(LinearGradient).attrs({
  colors: ['#63c2d1', '#01ab9d'],
})`
  flex: 1;
`;

export const Header = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 0px 20px 50px 20px;
`;

export const Body = styled.View`
  flex: 3;
  background-color: #fff;
  border-top-right-radius: 30px;
  padding: 30px 20px 30px 20px;
`;

export const WelcomeLogo = styled(Logo)`
  width: 350;
  height: 350;
`;

export const Welcome = styled.Text`
  color: #fff;
  font-family: 'LexendTera-Regular';
  font-size: 20px;
`;

export const TitleForm = styled.Text`
  color: #01ab9d;
  font-size: 15px;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  padding-bottom: 5px;
`;

export const FormInput = styled(TextInput).attrs({
  marginTop: Platform.OS === 'ios' ? 0 : -12,
})`
  flex: 1;
  padding-left: 10px;
  padding-bottom: -15px;
  color: black;
`;

export const GroupButton = styled.View`
  align-items: center;
  margin-top: 50px;
`;

export const Linear = styled(LinearGradient).attrs({
  colors: ['#63c2d1', '#01ab9d'],
})`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ButtonSignUp = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-color: #63c2d1;
  border-width: 1px;
  margin-top: 15px;
`;

export const SubmitButton = styled(Button)`
  background: #ff6666;
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
