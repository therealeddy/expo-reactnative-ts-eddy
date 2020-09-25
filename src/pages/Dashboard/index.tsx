import React, { useEffect } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '~/components/Header';
import logo from '~/images/logo.png';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ header: () => <Header />, headerShown: true });
  }, [navigation]);

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
            <Image source={logo} />
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Dashboard;
