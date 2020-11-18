import React, {useRef, useState, useEffect} from 'react';

import {AirbnbRating} from 'react-native-ratings';

import AwesomeAlert from 'react-native-awesome-alerts';

import Background from '~/components/Background';
import Stars from '~/components/Stars';

import {format, parseISO} from 'date-fns';

import {Modalize} from 'react-native-modalize';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import IconWhats from '~/assets/img/iconWhats.svg';
import IconGmail from '~/assets/img/iconGmail.svg';
import IconPhone from '~/assets/img/iconPhone.svg';

import Icon from 'react-native-vector-icons/Feather';

import {TouchableOpacity, View, Linking, Alert, Text} from 'react-native';

import {
  Container,
  Header,
  Title,
  Body,
  InfoArea,
  Avatar,
  Info,
  Name,
  ProductArea,
  ProductTitle,
  ProductItem,
  ProductInfo,
  ProductName,
  ProductPrice,
  ModalArea,
  ModalInfo,
  ModalTitle,
  ModalText,
  IconArea,
  GroupButton,
  RatingArea,
} from './styles';
import api from '~/services/api';
import {useSelector} from 'react-redux';

export default function DashboardDetails({route, navigation}) {
  const {appointment} = route.params;

  const disabled = useSelector(state => state.user.disabled);

  const [stars, setStars] = useState(0);
  const [posConfirmRating, setPosConfirmRating] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const modalizeRef = useRef(null);

  useEffect(() => {}, []);

  const subject = 'App Beleza Unissex';

  const message = `Olá ${
    appointment.provider.name
  }, estou entrando em contato pois gostaria de tirar algumas dúvidas sobre seus serviços.`;

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=55${appointment.provider.cel}&text=${message}`,
    );
  }

  function phoneCall() {
    Linking.openURL(`tel:${appointment.provider.tel}`);
  }

  function sendEmail() {
    Linking.openURL(
      `mailto:${appointment.provider.email}?subject=${subject}&body=${message}`,
    );
  }

  function onOpen() {
    modalizeRef.current?.open();
  }

  const dateAppointment = parseISO(appointment.date);

  const formattedDate = format(dateAppointment, 'dd/MM/yyyy');
  const formattedTime = format(dateAppointment, "HH:mm'h'");

  return (
    <Background>
      <Container>
        <Modalize ref={modalizeRef} snapPoint={480}>
          <ModalArea style={{marginTop: 20, flexDirection: 'column'}}>
            <ModalInfo style={{margin: 20}}>
              <ModalTitle style={{marginBottom: 5}}> Endereço </ModalTitle>
              <ModalText> {appointment.provider.address} </ModalText>
            </ModalInfo>

            <ModalInfo style={{margin: 20}}>
              <ModalTitle style={{marginBottom: 5}}> Número </ModalTitle>
              <ModalText> {appointment.provider.house_number} </ModalText>
            </ModalInfo>

            <ModalInfo style={{margin: 20}}>
              <ModalTitle style={{marginBottom: 5}}> Bairro </ModalTitle>
              <ModalText> {appointment.provider.district} </ModalText>
            </ModalInfo>

            <ModalInfo style={{margin: 20}}>
              <ModalTitle style={{marginBottom: 5}}> Cidade </ModalTitle>
              <ModalText> {appointment.provider.city} </ModalText>
            </ModalInfo>

            <ModalInfo style={{margin: 20}}>
              <ModalTitle style={{marginBottom: 5}}> Estado </ModalTitle>
              <ModalText> {appointment.provider.uf} </ModalText>
            </ModalInfo>
          </ModalArea>
        </Modalize>

        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Confirme Sua Escolha"
          message="Não será possível alterá-la futuramente."
          cancelText="Voltar"
          confirmText="Confirmar"
          confirmButtonColor="#DD6B55"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          onCancelPressed={() => {
            setShowAlert(false);
          }}
          onConfirmPressed={async () => {
            try {
              await api.put(
                `ratings/${appointment.provider.id}/${appointment.id}`,
                {
                  rating_appointment: stars,
                },
              );
              setPosConfirmRating(true);
              toast.show('Avaliação Concluída!', {type: 'success'});
              setShowAlert(false);
            } catch (err) {
              toast.show('Avaliação Não Concluída', {type: 'danger'});
              setShowAlert(false);
            }
          }}
        />

        <Header>
          <TouchableOpacity
            onPress={() => navigation.navigate('DashboardList')}>
            <Icon
              style={{margin: 10}}
              name="arrow-left"
              size={20}
              color={'#fff'}
            />
          </TouchableOpacity>
          <Title> {appointment.provider.shop_name} </Title>
          <View />
        </Header>
        <Body>
          <InfoArea>
            <Avatar
              source={{
                uri: appointment.provider.avatar
                  ? appointment.provider.avatar.url
                  : `https://robohash.org/${appointment.provider.id}.png`,
              }}
            />
            <Info>
              <Name> {appointment.provider.name} </Name>
              <Stars
                stars={
                  appointment.provider.rating === 0
                    ? 'Não Há Avaliações'
                    : appointment.provider.rating
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
            <ProductTitle> Serviço Agendado </ProductTitle>

            <ProductItem>
              <ProductInfo>
                <ProductName> {appointment.product.name_product} </ProductName>
                <ProductPrice style={{fontWeight: 'bold'}}>
                  R${appointment.product.price.toFixed(2)}{' '}
                </ProductPrice>
              </ProductInfo>

              <ProductInfo>
                <ProductName> {formattedDate} </ProductName>
                <ProductPrice style={{fontWeight: 'bold'}}>
                  {' '}
                  {formattedTime}{' '}
                </ProductPrice>
              </ProductInfo>
            </ProductItem>
            {appointment.past && (
              <>
                <RatingArea>
                  {appointment.rating_appointment === 0 && !posConfirmRating ? (
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: '#268596',
                      }}>
                      {' '}
                      Avalie!{' '}
                    </Text>
                  ) : (
                    <View>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 18,
                          color: '#268596',
                        }}>
                        {' '}
                        Sua Avaliação foi:{' '}
                      </Text>
                    </View>
                  )}

                  {appointment.past && (
                    <AirbnbRating
                      isDisabled={
                        appointment.rating_appointment > 0 || posConfirmRating
                          ? !disabled
                          : disabled
                      }
                      count={5}
                      reviews={[
                        'Ruim',
                        'Pode Melhorar',
                        'OK',
                        'Bom!',
                        'Ótimo!',
                      ]}
                      defaultRating={appointment.rating_appointment}
                      size={30}
                      onFinishRating={rating => {
                        setStars(rating);
                        setShowAlert(true);
                      }}
                    />
                  )}
                </RatingArea>
              </>
            )}

            {!appointment.past && <RatingArea />}

            <GroupButton style={{marginBottom: 10}}>
              <TouchableOpacity onPress={sendEmail}>
                <IconGmail height={80} width={150} />
              </TouchableOpacity>
              <TouchableOpacity onPress={phoneCall}>
                <IconPhone height={80} width={150} />
              </TouchableOpacity>
              <TouchableOpacity onPress={sendWhatsapp}>
                <IconWhats height={80} width={150} />
              </TouchableOpacity>
            </GroupButton>
          </ProductArea>
        </Body>
      </Container>
    </Background>
  );
}
