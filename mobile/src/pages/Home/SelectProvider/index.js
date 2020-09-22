import React, {useEffect, useState} from 'react';
import {StatusBar, Text, TouchableOpacity} from 'react-native';

import api from '~/services/api';
import {stateLocale} from './utils';

import Background from '~/components/Background';
import {
  Container,
  ContainerList,
  Left,
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
} from './styles';

export default function SelectProvider({navigation}) {
  const [providers, setProviders] = useState([]);
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pickerData, setPickerData] = useState(stateLocale.estados);

  useEffect(() => {
    setLoading(true);
    async function loadProviders() {
      const response = await api.get('providers');
      // const responseProducts = await api.get('productsm');
      setProviders(response.data);
      // setProducts(responseProducts.data);
      setLoading(false);
    }

    loadProviders();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#63c2d1" />
      <Background>
        <Container>
          <SearchForm>
            <SearchInput icon="search" placeholder="Busque pelo nome" />
          </SearchForm>

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
                  navigation.navigate('SelectDate', {
                    provider,
                  })
                }>
                <Left>
                  <Avatar
                    source={{
                      uri: provider.avatar.url
                        ? provider.avatar.url
                        : `https://api.adorable.io/avatar/50/${
                            provider.name
                          }.png`,
                    }}
                  />
                </Left>
                <Info>
                  <Name> {provider.name} </Name>
                  {/* <Name> {item.city} </Name>
                    <Name> {item.uf} </Name>
                    <Text> Serviços: </Text>
                    {products.map(
                      itemPro =>
                        itemPro.provider.id === item.id && (
                          <Text>{itemPro.name_product}</Text>
                        ),
                    )} */}
                </Info>
              </Rect>
            )}
          />
        </Container>
      </Background>
    </>
  );
}
