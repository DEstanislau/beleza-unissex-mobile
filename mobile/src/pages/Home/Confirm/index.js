import React, {useMemo} from 'react';

import Background from '~/components/Background';
import Icon from 'react-native-vector-icons/Feather';
import {CommonActions} from '@react-navigation/native';

import {formatRelative, parseISO, subHours} from 'date-fns';
import pt from 'date-fns/locale/pt';

import {TouchableOpacity, View, Text} from 'react-native';
import api from '~/services/api';

import {
  Container,
  Header,
  Title,
  Body,
  Avatar,
  Name,
  Time,
  SubmitButton,
  ProductName,
  ProductArea,
  Info,
  ProductPrice,
} from './styles';

export default function Confirm({route, navigation}) {
  const {provider} = route.params;
  const {value} = route.params;
  const {product} = route.params;

  const timeFormatted = useMemo(
    () => formatRelative(parseISO(value), new Date(), {locale: pt}),
    [value],
  );

  async function handleNewAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: value,
      product_id: product.id,
    });

    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'SelectProvider',
          },
        ],
      }),
    );

    navigation.navigate('DashboardList');
  }
  return (
    <Background>
      <Container>
        <Header>
          <TouchableOpacity onPress={() => navigation.navigate('SelectDate')}>
            <Icon
              style={{margin: 10}}
              name="arrow-left"
              size={20}
              color={'#fff'}
            />
          </TouchableOpacity>
          <Title>Confirme o Agendamento</Title>
          <View />
        </Header>
        <Body>
          <ProductArea>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: 20,
              }}>
              Serviço
            </Text>
            <Info>
              <ProductName> {product.name_product} </ProductName>
              <ProductPrice> R${product.price.toFixed(2)} </ProductPrice>
            </Info>
          </ProductArea>
          <Avatar
            source={{
              uri: provider.avatar.url
                ? provider.avatar.url
                : `https://api.adorable.io/avatar/50/${provider.name}.png`,
            }}
          />
          <Name>{provider.name}</Name>
          <Time>{timeFormatted}</Time>

          <SubmitButton onPress={handleNewAppointment}>
            Confirmar Agendamento
          </SubmitButton>
        </Body>
      </Container>
    </Background>
  );
}
