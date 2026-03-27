import { View, Text } from 'react-native';
import Input from '../components/input';
import Button from '../components/button';
import styles from './styles';
import React from 'react';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <Input placeholder="Nome" />
      <Input placeholder="Email" />
      <Input placeholder="Senha" secureTextEntry />

      <Button title="Cadastrar" />
    </View>
  );
}