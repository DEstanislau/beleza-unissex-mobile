import styled from 'styled-components/native';

import {Platform, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#63c2d1', '#01ab9d'],
})`
  flex: 1;
`;

export const Header = styled.View`
  height: 30px;
`;

export const Body = styled.View`
  flex: 1;
  background-color: #fff;
  border-top-right-radius: 30px;
  padding: 30px 20px 30px 20px;
`;

export const Welcome = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 50px;
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
  margin-top: 30px;
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
