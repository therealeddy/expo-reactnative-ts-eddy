import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  padding: 0 30px ${Platform.OS === 'ios' ? 40 : 150}px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin: 0 0 50px;
`;

export const CreateAccount = styled.TouchableOpacity`
  padding: 10px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-color: #000000;
  border-top-width: 0.5px;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const CreateAccountText = styled.Text`
  color: #00d8ff;
  font-family: 'Roboto-Medium';
  font-size: 18px;
  margin-left: 16px;
`;
