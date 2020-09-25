import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  padding-bottom: 5px;
`;

export const Body = styled.View`
  flex: 1;
  padding: 0 30px;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Time = styled.Text`
  margin-top: 4px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;
  margin-top: 20px;
  background-color: #268596;
`;

export const ProductArea = styled.View`
  margin: 30px 0;
  background-color: #4eadbe;
  border-radius: 10px;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
`;

export const ProductName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  border-right-width: 1px;
  border-right-color: #fff;
  margin-right: 20px;
  padding-right: 10px;
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Info = styled.View`
  flex-direction: row;
`;
