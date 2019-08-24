import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logoMedia.png';

import Background from '../../components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  Signlink,
  SignlinkText,
} from './styles';

export default function Cadastrar({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleAcessar() {}

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome completo!!"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail!!"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha!!"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleAcessar}
          />
          <SubmitButton onPress={handleAcessar}>Acessar</SubmitButton>
        </Form>
        <Signlink onPress={() => navigation.navigate('Entrar')}>
          <SignlinkText>Já possuo uma conta</SignlinkText>
        </Signlink>
      </Container>
    </Background>
  );
}
