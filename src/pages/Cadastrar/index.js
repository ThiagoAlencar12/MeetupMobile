import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../assets/logoMedia.png';

import Background from '../../components/Background';
import { cadastrarRequest } from '../../store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  Signlink,
  SignlinkText,
} from './styles';

export default function Cadastrar({ navigation }) {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleAcessar() {
    dispatch(cadastrarRequest(name, email, password));
  }

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
            value={name}
            onChangeText={setName}
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
            Criar conta
          </SubmitButton>
        </Form>
        <Signlink onPress={() => navigation.navigate('Entrar')}>
          <SignlinkText>Já possuo uma conta</SignlinkText>
        </Signlink>
      </Container>
    </Background>
  );
}
