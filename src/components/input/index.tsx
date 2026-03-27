import { TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';

type Props = {
  placeholder: string;
  secureTextEntry?: boolean;
};

export default function Input({ placeholder, secureTextEntry }: Props) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.input}
    />
  );
}