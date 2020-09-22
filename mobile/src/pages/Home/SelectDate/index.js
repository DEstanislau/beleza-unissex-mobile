import React, {useState, useEffect} from 'react';

import api from '~/services/api';

import Background from '~/components/Background';
import Icon from 'react-native-vector-icons/Feather';

import {View, TouchableOpacity} from 'react-native';

import DateInput from '~/components/DateInput';

import {Container, Header, Title, Body, FlatH, RectH, TitleH} from './styles';

export default function SelectDate({route, navigation}) {
  const [date, setDate] = useState(new Date());
  const [dateTime, setDateTime] = useState([]);

  const {provider} = route.params;
  // const provider = navigation.getParam('provider');

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setDateTime(response.data);
    }

    loadAvailable();
  }, [date, provider.id]);

  function handleSelectHour(value) {
    navigation.navigate('Confirm', {
      provider,
      value,
    });
  }

  return (
    <Background>
      <Container>
        <Header>
          <TouchableOpacity
            onPress={() => navigation.navigate('SelectProvider')}>
            <Icon
              style={{margin: 10}}
              name="arrow-left"
              size={20}
              color={'#fff'}
            />
          </TouchableOpacity>
          <Title>Selecione um Horário</Title>
          <View />
        </Header>
        <Body>
          <DateInput date={date} setDate={setDate} />
          <FlatH
            data={dateTime}
            keyExtractor={t => t.time}
            renderItem={({item: t}) => (
              <RectH
                onPress={() => handleSelectHour(t.value)}
                enabled={t.available}>
                <TitleH>{t.time}</TitleH>
              </RectH>
            )}
          />
        </Body>
      </Container>
    </Background>
  );
}
