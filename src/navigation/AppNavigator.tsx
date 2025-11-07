// src/navigation/AppNavigator.tsx

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack, AppStackParamList } from './AppStack'; 
import { AuthNavigator, AuthStackParamList } from './AuthNavigator'; 

export type RootStackParamList = AuthStackParamList & AppStackParamList;


// 2. O componente principal AppNavigator (sem React.FC)
export const AppNavigator = () => {

  // Mude para 'true' para ver a lista de Orçamentos; 'false' para ver a tela Intro/Login.
  const [isAuthenticated, setIsAuthenticated] = useState(true); 

  return (
    <NavigationContainer>
      {/* 3. O 'coração' do seu app: decide qual fluxo mostrar */}
      {isAuthenticated 
        ? <AppStack />      // Usuário logado: Mostra o App (Orçamentos)
        : <AuthNavigator /> // Usuário deslogado: Mostra o Fluxo de Autenticação (Intro/Login)
      }
    </NavigationContainer>
  );
};