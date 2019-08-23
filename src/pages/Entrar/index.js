import React from 'react';
import { Text } from 'react-native';

import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';

// import { Container } from './styles';

export default function Entrar() {
  return (
    <Background>
      <Text>TEsteEntrar</Text>
      <Input style={{ marginTop: 30 }} icon="call" placeholder="digite o numero"/>

      <Button>Entrar</Button>
    </Background>
  );
}
