import React from 'react';
import { useDispatch } from 'react-redux';
import { Header } from '../../components';
import { Container, Content } from './styles';

import Button from '../../components/Form/Button';

import { signInRequest } from '../../store/modules/auth/actions';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const email = 'email@gmail.com';
    const password = '123';
    dispatch(signInRequest(email, password));
  };

  return (
    <Container>
      <Header title="Login" />

      <Content>
        <Button title="Login" onPress={handleLogin} />
      </Content>
    </Container>
  );
};

export default SignIn;
