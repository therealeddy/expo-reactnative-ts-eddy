import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import Icon from 'react-native-vector-icons/Feather';
import {
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import getValidationErrors from '~/utils/getValidationErrors';
import { signInRequest } from '~/store/modules/auth/actions';

import Input from '~/components/Input';
import Button from '~/components/Button';

import { Container, Logo, CreateAccount, CreateAccountText } from './styles';

import logoImg from '~/images/logo.png';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      if (formRef.current) formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Endereço de email inválido.')
          .required('Email é obrigatório.'),
        password: Yup.string().required('Senha é obrigatória.'),
      });

      await schema.validate(data, { abortEarly: false });

      const { email, password } = data;

      dispatch(signInRequest(email, password));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        if (formRef.current) formRef.current.setErrors(errors);
        return;
      }

      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais.',
      );
    }
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Logo source={logoImg} />
            <Form onSubmit={handleSubmit} ref={formRef}>
              <Input
                name="email"
                icon="mail"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />

              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Button onPress={() => formRef.current?.submitForm()}>
                Entrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccount onPress={() => navigation.navigate('SignUp')}>
        <Icon color="#00d8ff" name="log-in" size={20} />
        <CreateAccountText>Criar uma conta</CreateAccountText>
      </CreateAccount>
    </>
  );
};

export default SignIn;
