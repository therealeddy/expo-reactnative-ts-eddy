import React from 'react';

import {
  Control,
  Controller,
  Merge,
  FieldError,
  FieldErrorsImpl,
  DeepRequired,
} from 'react-hook-form';

import { TextInputProps } from 'react-native';

import { useTheme } from 'styled-components';

import { Container, ContainerForm, Error } from './styles';

type Props = TextInputProps;

interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
  error?: Merge<FieldError, FieldErrorsImpl<DeepRequired<any>>>;
}

const Input: React.FC<Props> = ({ ...rest }) => {
  const theme = useTheme();
  return <Container {...rest} placeholderTextColor={theme.colors.third} />;
};

export const InputForm: React.FC<InputFormProps> = ({
  control,
  name,
  error,
  ...rest
}) => {
  return (
    <ContainerForm>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && <Error>{error}</Error>}
    </ContainerForm>
  );
};

export default Input;
