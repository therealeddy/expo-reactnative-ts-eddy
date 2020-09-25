import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, CreateAccount, CreateAccountText } from './styles';

import logoImg from '~/images/logo.png';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

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
            <Image source={logoImg} />
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccount onPress={() => navigation.navigate('SignIn')}>
        <Icon color="#00d8ff" name="arrow-left" size={20} />
        <CreateAccountText>Voltar</CreateAccountText>
      </CreateAccount>
    </>
  );
};

export default SignUp;
