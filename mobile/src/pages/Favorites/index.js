import React from 'react';
import {StatusBar} from 'react-native';

import Background from '~/components/Background';
import {Container, Title} from './styles';

export default function Favorites() {
  return (
    <>
      <StatusBar backgroundColor="#63c2d1" />
      <Background>
        <Container>
          <Title> Favorites </Title>
        </Container>
      </Background>
    </>
  );
}
