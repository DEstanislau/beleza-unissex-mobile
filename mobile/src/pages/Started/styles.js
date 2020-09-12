import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#63c2d1', '#01ab9d'],
})`
  flex: 1;
`;

export const Header = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 50px 0px 50px 30px;
  border-top-right-radius: 30px;
`;

export const Title = styled.Text`
  color: #01ab9d;
  font-size: 30px;
  font-weight: bold;
  margin-top: -20px;
`;

export const Text = styled.Text`
  color: grey;
  font-weight: bold;
`;

export const GroupButton = styled.View`
  align-items: flex-end;
  margin-top: 50px;
  margin-right: 10px;
`;

export const Linear = styled(LinearGradient).attrs({
  colors: ['#63c2d1', '#01ab9d'],
})`
  flex-direction: row;
  width: 150px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;
