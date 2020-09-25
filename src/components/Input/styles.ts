import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContentProps {
  isFocused: boolean;
  hasError: boolean;
}

export const Container = styled.View`
  position: relative;
`;

export const Content = styled.View<ContentProps>`
  background: rgba(0, 0, 0, 0.6);
  border-color: transparent;
  border-radius: 5px;
  border-width: 2px;
  height: 55px;
  margin-bottom: 8px;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  ${props =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: #00d8ff;
    `}
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const TextInput = styled.TextInput`
  color: #ffffff;
  font-family: 'Roboto-Regular';
  font-size: 16px;
  flex: 1;
`;

export const TextError = styled.Text`
  color: #c53030;
  font-family: 'Roboto-Regular';
  font-size: 12px;
  position: absolute;
  top: 10px;
  right: 15px;
`;
