import React from 'react';
import Home from './src/screens/Home/Index';
import { SafeAreaView, StyleSheet } from 'react-native';

export default () => {
  return (
    <SafeAreaView style={estilos.tela}>
      <Home />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1
  }
});