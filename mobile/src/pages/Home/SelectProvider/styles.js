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
  margin: 0 5px 25px 5px;
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

export const Rect = styled(RectButton)`
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
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
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SearchInput = styled(Input)`
  margin: 20px 20px 0 20px;
  background: #ffffff;
  font-size: 16px;
  color: #333;
  padding: 0px 20px;
`;

export const FieldFilter = styled.ScrollView`
  margin: 10px 0 0 15px;
  flex-direction: row;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})`
  margin-bottom: 160px;
`;

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
  /* width: 50px;
  height: 50px;
  border-radius: 25px; */

  width: 88px;
  height: 88px;
  border-radius: 44px;
`;

export const Info = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const SeeProfile = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #4eadbe;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const SeeProfileText = styled.Text`
  font-size: 13px;
  color: #268596;
`;

export const Scroller = styled.ScrollView`
  height: 110px;
`;
