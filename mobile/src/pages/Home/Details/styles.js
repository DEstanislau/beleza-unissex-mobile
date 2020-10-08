import styled from 'styled-components/native';

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

export const Body = styled.View`
  flex: 1;
  margin-top: 80px;
  border-top-left-radius: 50px;
  background: #fff;
  /* padding: 0 30px; */
`;

export const InfoArea = styled.View`
  flex-direction: row;
  /* margin-top: -30px; */
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  margin-top: -30px;
  border-width: 4px;
  border-color: #ffffffff;
`;

export const Name = styled.Text`
  color: #000000;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Info = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 10px;
  /* justify-content: space-between; */
`;

export const ProductArea = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const ProductTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #268596;
  margin-left: 30px;
  margin-bottom: 20px;
`;

export const ProductList = styled.FlatList``;

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

export const ProductButton = styled.TouchableOpacity`
  background-color: #4eadbe;
  border-radius: 10px;
  padding: 10px 15px;
`;

export const ProductTextButton = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  padding-bottom: 5px;
`;

export const Loading = styled.ActivityIndicator`
  flex: 1;
  align-self: center;
`;

export const ImgPhone = styled.Image`
  width: 80px;
  height: 80px;
`;

export const GroupButton = styled.View`
  border-top-color: #4eadbe;
  border-top-width: 1px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const IconArea = styled.View`
  height: 40px;
  width: 40px;
  background: #ffffff;
  border-radius: 20px;
  border: 2px solid #999999;
  margin-top: -15px;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
`;
