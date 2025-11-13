// src/navigation/AppStack.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { OrcamentosScreen } from '../screens/Orcamento/Orcamentos';

// Componente HomeScreen local criado para evitar import inexistente.
// Substitua por sua implementação real em ../screens/Home/HomeScreen quando adicionar o arquivo.
export const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
    </View>
  );
};

// Tipagem para as rotas do App Logado
export type AppStackParamList = {
  Home: undefined;
  Orcamentos: undefined;
  // Futuras telas como 'DetalheOrcamento', 'Configuracoes', etc.
};

const MainStack = createStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Orcamentos"
        component={OrcamentosScreen}
        options={{ title: 'Gerar Orçamento', headerShown: false }}
      />
      {/* Adicione outras rotas do app logado aqui */}
    </MainStack.Navigator>
  );
};