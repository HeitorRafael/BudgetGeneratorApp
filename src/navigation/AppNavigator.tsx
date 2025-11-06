// src/navigation/AppNavigator.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { OrcamentosScreen } from '../screens/Orcamento/Orcamentos'; // Importando sua tela

// 1. Defina a tipagem (usamos Orcamentos como rota principal)
export type RootStackParamList = {
  Orcamentos: undefined; // Sua rota principal
  // ... outras telas que virão
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      {/* 2. Defina a tela de Orçamentos como a inicial */}
      <Stack.Navigator initialRouteName="Orcamentos"> 
        <Stack.Screen 
          name="Orcamentos" 
          component={OrcamentosScreen} 
          options={{ title: 'Orçamentos', headerShown: false }} // Removendo o Header padrão, já que você criou um.
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};