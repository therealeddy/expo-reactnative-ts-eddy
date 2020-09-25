import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  padding: 0 30px ${Platform.OS === 'ios' ? 40 : 150}px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
