// src/screens/AddBudget/AddBudgetScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const AddBudgetScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Novo Orçamento</Text>
      
      <View style={styles.formSection}>
        <Text style={styles.label}>Nome do Projeto:</Text>
        {/* Futuramente: <TextInput placeholder="Ex: Website para Cliente X" /> */}
        
        <Text style={styles.label}>Valor Estimado:</Text>
        {/* Futuramente: <TextInput placeholder="R$ 5000,00" keyboardType="numeric" /> */}
        
        <Text style={styles.label}>Descrição Rápida:</Text>
        {/* Futuramente: <TextInput placeholder="Requisitos básicos..." multiline /> */}
      </View>
      
      <Button title="Gerar Orçamento com IA" onPress={() => console.log("Gerar Orçamento")} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  formSection: {
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
    color: '#333',
  }
  // Adicionar estilos para TextInput e Button aqui no futuro
});