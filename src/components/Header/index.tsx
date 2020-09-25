import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';
import { Container, TextHeader, ButtonExit } from './styles';
import { signOut } from '~/store/modules/auth/actions';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(signOut());
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00d8ff" />
      <Container>
        <TextHeader>Dashboard</TextHeader>
        <ButtonExit onPress={handleExit}>
          <Icon color="#000000" name="log-in" size={20} />
        </ButtonExit>
      </Container>
    </>
  );
};

export default Header;
