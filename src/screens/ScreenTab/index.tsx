import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Header } from '../../components';
import Button from '../../components/Form/Button';
import { Container, Content, Logout } from './styles';
import { signOut } from '../../store/modules/auth/actions';

const ScreenTab: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePush = () => {
    navigation.navigate('Screen Stack');
  };

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <Container>
      <Header title="Screen Tab" />

      <Content>
        <Button title="Go Screen Stack" onPress={handlePush} />
        <Logout>
          <Button title="Logout" onPress={handleLogout} />
        </Logout>
      </Content>
    </Container>
  );
};

export default ScreenTab;
