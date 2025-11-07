// src/screens/IntroScreen/IntroData.ts

import { Ionicons } from '@expo/vector-icons';

// Tipagem para cada item de feature
export type Feature = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
};

// Dados para a seção principal
export const mainFeatures: Feature[] = [
  {
    icon: 'bulb-outline',
    title: 'Análise Inteligente',
    description: 'Nossa IA analisa seus dados e sugere os melhores preços baseados no mercado.',
  },
  {
    icon: 'person-add-outline',
    title: 'Sugestões Personalizadas',
    description: 'Receba recomendações específicas para seu nicho de mercado.',
  },
  {
    icon: 'time-outline',
    title: 'Economia de Tempo',
    description: 'Gere orçamentos em minutos, não em horas. Foque no que realmente importa.',
  },
];

// Dados para a seção secundária
export const secondaryFeatures: Feature[] = [
    {
        icon: 'speedometer-outline',
        title: 'Início Rápido',
        description: 'Configure seu perfil e comece a gerar orçamentos em minutos.'
    },
    {
        icon: 'checkmark-circle-outline',
        title: 'Resultados Confiáveis',
        description: 'Algoritmos precisos e atualizados com as tendências do mercado.'
    },
    {
        icon: 'bar-chart-outline',
        title: 'Análise Detalhada',
        description: 'Visualize dados e métricas importantes para tomar melhores decisões.'
    },
    {
        icon: 'options-outline',
        title: 'Personalização Inteligente',
        description: 'Adapte os orçamentos ao seu estilo e necessidades específicas.'
    },
    {
        icon: 'person-add-outline',
        title: 'Ideal para Iniciantes',
        description: 'Interface intuitiva e suporte para quem está começando.'
    },
    {
        icon: 'document-text-outline',
        title: 'Orçamentos Profissionais',
        description: 'Documentos com aparência profissional e prontos para apresentar.'
    }
];