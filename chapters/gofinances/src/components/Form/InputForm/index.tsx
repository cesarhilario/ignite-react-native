import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

import { Input } from '../Input';

import { Container, Error } from './styles';

interface IProps extends TextInputProps {
  control: Control;
  name: string;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export function InputForm({ control, name, error, ...rest }: IProps) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => <Input onChangeText={onChange} value={value} {...rest} />}
        name={name}
      />
      {error ? <Error>{error}</Error> : null}
    </Container>
  );
}
