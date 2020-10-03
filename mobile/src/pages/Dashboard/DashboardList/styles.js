import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
  padding-bottom: 5px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})``;

export const Loading = styled.ActivityIndicator`
  flex: 1;
  align-self: center;
`;

export const ProductItem = styled.View`
  flex-direction: row;
  margin: 0px 30px 20px 30px;
`;

export const ProductInfo = styled.View`
  flex: 1;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #268596;
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
  color: #268596;
`;
