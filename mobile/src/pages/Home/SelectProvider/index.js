import React, {useEffect, useState} from 'react';
import {StatusBar, RefreshControl} from 'react-native';

import Stars from '~/components/Stars';

import api from '~/services/api';
import {stateLocale} from './utils';

import Background from '~/components/Background';
import {
  Container,
  // ContainerList,
  // Left,
  SearchInput,
  SearchForm,
  List,
  Loading,
  FieldFilter,
  Name,
  Info,
  Avatar,
  PickerStates,
  TextState,
  ButtonFilter,
  Rect,
  SeeProfile,
  SeeProfileText,
  Scroller,
} from './styles';

export default function SelectProvider({navigation}) {
  const [providers, setProviders] = useState([]);
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pickerData, setPickerData] = useState(stateLocale.estados);
  const [refreshing, setRefreshing] = useState(false);

  async function loadProviders() {
    const response = await api.get('providers');
    // const responseProducts = await api.get('productsm');
    setProviders(response.data);
    // setProducts(responseProducts.data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    loadProviders();
  }, []);

  const onRefresh = () => {
    setRefreshing(false);
    loadProviders();
  };

  return (
    <>
      <StatusBar backgroundColor="#63c2d1" />
      <Background>
        <Container>
          <Scroller
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <SearchForm>
              <SearchInput icon="search" placeholder="Busque pelo nome" />
            </SearchForm>
          </Scroller>
          <FieldFilter horizontal={true} showsHorizontalScrollIndicator={false}>
            {pickerData.map(item => (
              <ButtonFilter key={item.sigla} onPress={() => {}}>
                <TextState> {item.sigla} </TextState>

                <PickerStates
                  selectedValue={item}
                  onValueChange={itemValue => {
                    setLoading(true);
                    async function loadProviderFilter() {
                      const responseProvider = await api.get('providers');
                      const data = responseProvider.data.filter(
                        provider => provider.city === itemValue,
                      );

                      setProviders(data);
                      setLoading(false);
                    }

                    loadProviderFilter();
                  }}>
                  {item.cidades.map(cidade => (
                    <PickerStates.Item
                      key={cidade}
                      label={cidade}
                      value={cidade}
                    />
                  ))}
                </PickerStates>
              </ButtonFilter>
            ))}
          </FieldFilter>

          {loading && <Loading size="large" color="#FFFFFF" />}

          <List
            data={providers}
            keyExtractor={provider => String(provider.id)}
            renderItem={({item: provider}) => (
              <Rect
                onPress={() =>
                  navigation.navigate('Details', {
                    provider,
                  })
                }>
                <Avatar
                  source={{
                    uri: provider.avatar.url
                      ? provider.avatar.url
                      : `https://api.adorable.io/avatar/50/${
                          provider.name
                        }.png`,
                  }}
                />

                <Info>
                  <Name> {provider.shop_name} </Name>
                  <Stars stars={3} showNumber={true} />
                  <SeeProfile>
                    <SeeProfileText> Ver Perfil </SeeProfileText>
                  </SeeProfile>
                </Info>
              </Rect>
            )}
          />
        </Container>
      </Background>
    </>
  );
}
