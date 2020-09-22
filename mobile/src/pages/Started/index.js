import React from 'react';

import Icons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import StartedLogo from '~/assets/img/startedLogo.svg';
import {TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Body,
  Title,
  Text,
  Linear,
  GroupButton,
} from './styles';

const AnimatedHeader = Animatable.createAnimatableComponent(Header);
const AnimatedBody = Animatable.createAnimatableComponent(Body);

export default function Started({navigation}) {
  return (
    <Container>
      <AnimatedHeader useNativeDriver animation="bounceIn" duration={1500}>
        <StartedLogo width={350} height={350} />
      </AnimatedHeader>
      <AnimatedBody useNativeDriver animation="fadeInUpBig">
        <Title>Quer ficar bem na foto?</Title>
        <Text style={{fontSize: 15, marginTop: 5}}>
          Comece já fazendo Login :)
        </Text>
        <GroupButton>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Linear>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Comece Agora
              </Text>
              <Icons name="navigate-next" color="#fff" size={20} />
            </Linear>
          </TouchableOpacity>
        </GroupButton>
      </AnimatedBody>
    </Container>
  );
}
