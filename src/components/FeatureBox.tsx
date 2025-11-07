// src/components/FeatureBox.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from './'; // Presume que ThemedText é exportado via index.ts da pasta components
import { useThemeColor } from '../hooks'; // Importa o hook de dentro de src/hooks
import { Feature } from '../../src/screens/Intro/IntroData'; // Importa a tipagem do local

// Definimos os estilos do FeatureBox aqui, ou poderíamos criar um arquivo próprio para ele
const localStyles = StyleSheet.create({
    boxInfo: {
        padding: 20,
        borderRadius: 8,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 3,
    },
    icon: {
        marginBottom: 12,
    },
    boxText: {
        marginTop: 8,
    },
});

// Componente simples para exibir cada feature
export const FeatureBox = ({ feature }: { feature: Feature }) => {
  const primaryColor = useThemeColor({}, 'primary');
  const boxBackgroundColor = useThemeColor({}, 'boxBackground');
  
  return (
    <View style={[localStyles.boxInfo, { backgroundColor: boxBackgroundColor }]}>
      <Ionicons name={feature.icon} size={32} color={primaryColor} style={localStyles.icon} />
      <ThemedText type="subtitle" style={{ color: primaryColor }}>{feature.title}</ThemedText>
      <ThemedText style={localStyles.boxText}>{feature.description}</ThemedText>
    </View>
  );
};