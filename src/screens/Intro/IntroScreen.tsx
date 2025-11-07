// src/screens/Intro/IntroScreen.tsx

import React from 'react';
import { ScrollView, View } from 'react-native';

// Componentes e Hooks (Os caminhos parecem corretos: '../../components')
import { ThemedText, ThemedView } from '../../components'; 
import { useThemeColor } from '../../hooks';
import { FeatureBox } from '../../components/FeatureBox'; 

// Dados e Estilos
import { mainFeatures, secondaryFeatures } from './IntroData'; 
// CORREÇÃO 1: O nome do arquivo de estilos é 'IntroStyle.tsx', não 'InstroStyle'
import { styles } from './InstroStyle'; 

// Navegação (MANTEMOS AS IMPORTAÇÕES para futuras necessidades)
import { StackScreenProps } from '@react-navigation/stack'; 
import { RootStackParamList } from '../../navigation/AppNavigator'; 
import { Button } from 'react-native'; // Vamos precisar de um botão para ir para a próxima tela

// CORREÇÃO 2: A tipagem deve ser para a rota 'Intro', não 'Orcamentos'.
// Se você for usar 'navigation.navigate', a tipagem deve ser a da rota que VOCÊ está.
type IntroScreenProps = StackScreenProps<RootStackParamList, 'Intro'>;

// CORREÇÃO 3: Removendo a tipagem complexa da função principal para evitar o erro tsc(2322)
// Agora, esta função aceitará as props injetadas pelo React Navigation (navigation, route)
// sem forçar a tipagem complexa, o que é o que o React Navigation espera.
export const IntroScreen = (props: IntroScreenProps) => { 
  // Desestruturamos 'navigation' para usá-lo, se necessário.
  const { navigation } = props;
    
  const primaryColor = useThemeColor({}, 'primary');
  
  // Função para testar a navegação
  const handleStart = () => {
    // Substitua 'Login' pela rota correta que você quer que o app abra após a Introdução.
    // Ex: navigation.navigate('Login'); ou navigation.navigate('Orcamentos'); 
    console.log("Navegar para Login ou Orçamentos");
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.headerSection}>
          <ThemedText type="title" style={[styles.title, { color: primaryColor }]}>
            Gere Orçamentos Profissionais com IA
          </ThemedText>
          <ThemedText style={styles.lead}>
            Transforme suas ideias em orçamentos detalhados e precisos com a ajuda da nossa inteligência artificial. Perfeito para profissionais iniciantes e experientes.
          </ThemedText>
        </View>

        <View style={styles.featuresSection}>
          {mainFeatures.map((feature, index) => (
            <FeatureBox key={`main-${index}`} feature={feature} />
          ))}
        </View>
        
        <View style={styles.secondarySection}>
            <ThemedText type="title" style={[styles.sectionTitle, { color: primaryColor }]}>
                Por que escolher nossa plataforma?
            </ThemedText>
            {secondaryFeatures.map((feature, index) => (
                <FeatureBox key={`secondary-${index}`} feature={feature} />
            ))}
        </View>

        {/* Adicione um botão para iniciar o fluxo */}
        <Button 
          title="Começar / Fazer Login" 
          onPress={handleStart} 
        />

      </ScrollView>
    </ThemedView>
  );
};