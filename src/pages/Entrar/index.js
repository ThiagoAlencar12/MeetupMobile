import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logoMedia.png';

import Background from '~/components/Background';
import { requireEntrar } from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  Signlink,
  SignlinkText,
} from './styles';

export default function Entrar({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleAcessar() {
    dispatch(requireEntrar(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail!!"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha!!"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleAcessar}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton loading={loading} onPress={handleAcessar}>
            Acessar
          </SubmitButton>
        </Form>
        <Signlink onPress={() => navigation.navigate('Cadastrar')}>
          <SignlinkText>Criar uma conta gratuita</SignlinkText>
        </Signlink>
      </Container>
    </Background>
  );
}
