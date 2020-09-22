import styled from 'styled-components/native';
import Input from '~/components/Input';
import {RectButton} from 'react-native-gesture-handler';

import {Picker} from '@react-native-community/picker';

export const Container = styled.SafeAreaView``;

export const ButtonFilter = styled.View`
  justify-content: center;
  align-items: center;
  border: 1px;
  border-radius: 25px;
  margin: 0 5px 0 5px;
  background-color: white;
  width: 50px;
  height: 50px;
`;

export const PickerStates = styled(Picker)`
  width: 30px;
  height: 10px;
  margin-left: 15px;
`;

export const TextState = styled.Text`
  font-weight: bold;
  color: black;
  align-self: center;
`;

export const Rect = styled.TouchableOpacity`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const SearchForm = styled.View`
  align-self: stretch;
  margin-top: 20px;
`;

export const SearchInput = styled(Input)`
  margin-bottom: 10px;
  background: #ffffff;
  font-size: 16px;
  color: #333;
  padding: 0px 20px;
  margin: 20px;
`;

export const FieldFilter = styled.ScrollView`
  margin-left: 5px;
  margin-bottom: 20px;
  flex-direction: row;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})``;

export const Loading = styled.ActivityIndicator`
  flex: 1;
  align-self: center;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;
