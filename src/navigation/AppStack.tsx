// src/navigation/AppStack.tsx (Versão Final com Tab Navigator)

import React from 'react';
// Importamos o Tab Navigator (o correto para a barra inferior)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// 1. CORREÇÃO DE CAMINHO: Seu arquivo é 'Orcamentos.tsx'
import { OrcamentosScreen } from '../screens/Orcamento/Orcamentos'; 
// Importe a tela 'Novo'
import { AddBudgetScreen } from '../screens/AddBudget/AddBudget';

// Tipagem
export type AppStackParamList = {
  Orcamentos: undefined;
  Novo: undefined; 
};

// Criamos o Tab Navigator
const Tab = createBottomTabNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Orcamentos"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'help'; // Valor padrão seguro

          if (route.name === 'Orcamentos') {
            iconName = focused ? 'folder-open' : 'folder-outline';
          } else if (route.name === 'Novo') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007bff', 
        tabBarInactiveTintColor: '#888', 
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Orcamentos" 
        component={OrcamentosScreen} 
        options={{ title: 'Meus Orçamentos' }} 
      />
      
      <Tab.Screen 
        name="Novo" 
        component={AddBudgetScreen} 
        options={{ title: 'Novo Orçamento' }} 
      />
    </Tab.Navigator>
  );
};