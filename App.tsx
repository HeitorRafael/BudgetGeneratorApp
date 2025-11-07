// App.tsx
import React from 'react';
// Importa o componente que gerencia TODAS as suas telas e rotas
import { AppNavigator } from './src/navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';

// O App.tsx é o CONTAINER que carrega o Navegador.
export default function App() {
  return (
    <>
      {/* O AppNavigator lida com a Intro, Orcamentos, etc. */}
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}

