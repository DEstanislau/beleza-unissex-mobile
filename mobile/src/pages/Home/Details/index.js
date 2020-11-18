import React, {useState, useEffect, useRef} from 'react';

import Background from '~/components/Background';
import Stars from '~/components/Stars';

import {Modalize} from 'react-native-modalize';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import IconWhats from '~/assets/img/iconWhats.svg';
import IconGmail from '~/assets/img/iconGmail.svg';
import IconPhone from '~/assets/img/iconPhone.svg';

import api from '~/services/api';

import Icon from 'react-native-vector-icons/Feather';

import {useIsFocused} from '@react-navigation/native';

import {TouchableOpacity, View, Linking} from 'react-native';

import {
  Container,
  Header,
  Title,
  Body,
  InfoArea,
  Avatar,
  Info,
  Name,
  Loading,
  ProductArea,
  ProductTitle,
  ProductList,
  ProductItem,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductButton,
  ProductTextButton,
  GroupButton,
  IconArea,
} from './styles';

export default function Details({route, navigation}) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const isFocused = useIsFocused();

  const modalizeRef = useRef(null);

  const {provider} = route.params;

  async function loadProducts() {
    const response = await api.get('productsm');
    const data = await response.data.filter(
      item => item.provider.id === provider.id,
    );
    setProducts(data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    loadProducts();
  }, []);

  const subject = 'App Beleza Unissex';

  const message = `Olá ${
    provider.name
  }, estou entrando em contato pois gostaria de tirar algumas dúvidas sobre seus serviços.`;

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=55${provider.cel}&text=${message}`);
  }

  function phoneCall() {
    Linking.openURL(`tel:${provider.tel}`);
  }

  function sendEmail() {
    Linking.openURL(
      `mailto:${provider.email}?subject=${subject}&body=${message}`,
    );
  }

  function onOpen() {
    modalizeRef.current?.open();
  }

  return (
    <Background>
      <Container>
        <Modalize ref={modalizeRef} snapPoint={480}>
          <ProductItem style={{marginTop: 20, flexDirection: 'column'}}>
            <ProductInfo style={{margin: 20}}>
              <ProductName style={{marginBottom: 5}}> Endereço </ProductName>
              <ProductPrice> {provider.address} </ProductPrice>
            </ProductInfo>

            <ProductInfo style={{margin: 20}}>
              <ProductName style={{marginBottom: 5}}> Número </ProductName>
              <ProductPrice> {provider.house_number} </ProductPrice>
            </ProductInfo>

            <ProductInfo style={{margin: 20}}>
              <ProductName style={{marginBottom: 5}}> Bairro </ProductName>
              <ProductPrice> {provider.district} </ProductPrice>
            </ProductInfo>

            <ProductInfo style={{margin: 20}}>
              <ProductName style={{marginBottom: 5}}> Cidade </ProductName>
              <ProductPrice> {provider.city} </ProductPrice>
            </ProductInfo>

            <ProductInfo style={{margin: 20}}>
              <ProductName style={{marginBottom: 5}}> Estado </ProductName>
              <ProductPrice> {provider.uf} </ProductPrice>
            </ProductInfo>
          </ProductItem>
        </Modalize>

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
          <Title> {provider.shop_name} </Title>
          <View />
        </Header>
        <Body>
          <InfoArea>
            <Avatar
              source={{
                uri: provider.avatar
                  ? provider.avatar.url
                  : `https://robohash.org/${provider.id}.png`,
              }}
            />
            <Info>
              <Name> {provider.name} </Name>
              <Stars
                stars={
                  provider.rating === 0 ? 'Não Há Avaliações' : provider.rating
                }
                showNumber={true}
                wd={18}
                hg={18}
              />
            </Info>

            <IconArea>
              <TouchableOpacity onPress={onOpen}>
                <IconMaterial name="location-on" size={30} color="#F08080" />
              </TouchableOpacity>
            </IconArea>
          </InfoArea>

          <ProductArea>
            <ProductTitle> Lista de Serviços </ProductTitle>

            {loading && <Loading size="large" color="#000000" />}

            <ProductList
              data={products}
              keyExtractor={item => String(item.id)}
              renderItem={({item: product}) => (
                <ProductItem>
                  <ProductInfo>
                    <ProductName> {product.name_product} </ProductName>
                    <ProductPrice> R${product.price.toFixed(2)} </ProductPrice>
                  </ProductInfo>
                  <ProductButton
                    onPress={() =>
                      navigation.navigate('SelectDate', {
                        provider,
                        product,
                      })
                    }>
                    <ProductTextButton>Agendar</ProductTextButton>
                  </ProductButton>
                </ProductItem>
              )}
            />
            <GroupButton style={{marginBottom: 10}}>
              <TouchableOpacity onPress={sendEmail}>
                <IconGmail height={65} width={150} />
              </TouchableOpacity>
              <TouchableOpacity onPress={phoneCall}>
                <IconPhone height={65} width={150} />
              </TouchableOpacity>
              <TouchableOpacity onPress={sendWhatsapp}>
                <IconWhats height={65} width={150} />
              </TouchableOpacity>
            </GroupButton>
          </ProductArea>
        </Body>
      </Container>
    </Background>
  );
}
