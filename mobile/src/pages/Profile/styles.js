import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: true,
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  margin-top: 30px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  padding-bottom: 5px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
  margin-bottom: 80px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  background: #ffffff;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;

export const SubmitButton = styled(Button)`
  background: #268596;
  margin-top: 5px;
`;

export const LogoutButton = styled(Button)`
  background: #ff6666;
  margin-top: 10px;
`;
