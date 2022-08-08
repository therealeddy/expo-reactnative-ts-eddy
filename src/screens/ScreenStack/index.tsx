import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components';
import Button from '../../components/Form/Button';
import { Container, Content } from './styles';

const ScreenStack: React.FC = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header title="Screen Stack" />

      <Content>
        <Button title="Go Back" onPress={handleBack} />
      </Content>
    </Container>
  );
};

export default ScreenStack;
