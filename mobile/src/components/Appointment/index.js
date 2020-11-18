import React, {useMemo} from 'react';

import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Left,
  Avatar,
  Info,
  Name,
  Time,
  SeeProfile,
  SeeProfileText,
} from './styles';
import {TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Appointment({data, onCancel}) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  const navigation = useNavigation();

  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? data.provider.avatar.url
              : `https://robohash.org/${data.provider.id}.png`,
          }}
        />

        <Info>
          <Name> {data.provider.name} </Name>
          <Time> {dateParsed} </Time>
          <SeeProfile style={{marginTop: 10}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DashboardDetails', {
                  appointment: data,
                })
              }>
              <SeeProfileText> Ver Detalhes </SeeProfileText>
            </TouchableOpacity>
          </SeeProfile>
        </Info>

        {data.cancelable && !data.canceled_at && (
          <View style={{alignSelf: 'flex-end'}}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
              onPress={onCancel}>
              <View
                style={{
                  backgroundColor: '#f64c75',
                  height: 45,
                  width: 45,
                  borderRadius: 23,
                  borderWidth: 2,
                  borderColor: '#ffffffff',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="event-busy" size={30} color="#ffffff" />
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Left>
    </Container>
  );
}
