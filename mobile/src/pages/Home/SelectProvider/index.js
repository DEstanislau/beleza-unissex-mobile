import React, {useEffect, useState} from 'react';
import {StatusBar, RefreshControl, TouchableOpacity, Text} from 'react-native';

import Stars from '~/components/Stars';

import api from '~/services/api';
import {stateLocale} from './utils';

import Background from '~/components/Background';
import {
  Container,
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
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pickerData, setPickerData] = useState(stateLocale.estados);
  const [refreshing, setRefreshing] = useState(false);

  async function loadProviders() {
    const response = await api.get('providers');
    setProviders(response.data);
    setSearch(response.data);
    setLoading(false);
  }

  async function loadProducts() {
    const response = await api.get('productsm');
    setProducts(response.data);
  }

  function handleSearch(text) {
    const formattedQuery = text.toLowerCase();
    const data = providers.filter(item => {
      let shopName = item.shop_name.toLowerCase();
      if (shopName.includes(formattedQuery)) {
        return true;
      }
      return false;
    });
    setSearch(data);
  }

  useEffect(() => {
    setLoading(true);
    loadProviders();
    loadProducts();
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
              <SearchInput
                icon="search"
                placeholder="Ex: Salão do todi"
                onChangeText={handleSearch}
              />
            </SearchForm>
          </Scroller>

          <FieldFilter horizontal={true} showsHorizontalScrollIndicator={false}>
            {pickerData.map(item => (
              <ButtonFilter key={item.sigla}>
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

                      setSearch(data);
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
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={search}
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
                    uri: provider.avatar
                      ? provider.avatar.url
                      : `https://robohash.org/${provider.id}.png`,
                  }}
                />

                <Info>
                  <Name> {provider.shop_name} </Name>
                  <Stars
                    stars={
                      provider.rating === 0
                        ? 'Não Há Avaliações'
                        : provider.rating
                    }
                    showNumber={true}
                    wd={18}
                    hg={18}
                  />
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
