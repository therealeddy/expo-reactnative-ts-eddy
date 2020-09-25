import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background: #00d8ff;
  border-radius: 5px;
  height: 55px;
  margin-top: 8px;
  min-width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #000000;
  font-family: 'Roboto-Medium';
  font-size: 18px;
`;
