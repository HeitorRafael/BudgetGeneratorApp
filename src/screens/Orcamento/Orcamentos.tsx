import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './OrcamentoStyle';

// Tipagem para os formulários
type BudgetType = 'produto' | 'servico';

// --- Componente Principal ---
export const OrcamentosScreen = () => {
    const insets = useSafeAreaInsets();
    const [budgetType, setBudgetType] = useState<BudgetType>('produto');

    // --- Formulário de Produto ---
    const ProductForm = () => {
        const [data, setData] = useState({
            nomeProduto: '',
            custoProducao: '',
            materiaisUtilizados: '',
            margemLucro: '',
            horas: '',
            valorHora: '',
            custoExtra: '',
        });

        const handleChange = (field: keyof typeof data, value: string) => {
            setData(prev => ({ ...prev, [field]: value }));
        };

        return (
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Orçamento de Produto</Text>
                <TextInput style={styles.input} placeholder="Nome do Produto *" value={data.nomeProduto} onChangeText={v => handleChange('nomeProduto', v)} />
                <TextInput style={styles.input} placeholder="Materiais Utilizados *" value={data.materiaisUtilizados} onChangeText={v => handleChange('materiaisUtilizados', v)} />
                <View style={styles.inputRow}>
                    <View style={styles.inputGroup}><TextInput style={styles.input} placeholder="Custo Produção (R$) *" value={data.custoProducao} onChangeText={v => handleChange('custoProducao', v)} keyboardType="numeric" /></View>
                    <View style={styles.inputGroup}><TextInput style={styles.input} placeholder="Margem Lucro (%) *" value={data.margemLucro} onChangeText={v => handleChange('margemLucro', v)} keyboardType="numeric" /></View>
                </View>
                <View style={styles.inputRow}>
                    <View style={styles.inputGroup}><TextInput style={styles.input} placeholder="Horas Estimadas *" value={data.horas} onChangeText={v => handleChange('horas', v)} keyboardType="numeric" /></View>
                    <View style={styles.inputGroup}><TextInput style={styles.input} placeholder="Valor por Hora (R$) *" value={data.valorHora} onChangeText={v => handleChange('valorHora', v)} keyboardType="numeric" /></View>
                </View>
                <TextInput style={styles.input} placeholder="Custos Extras (R$)" value={data.custoExtra} onChangeText={v => handleChange('custoExtra', v)} keyboardType="numeric" />
            </View>
        );
    };

    // --- Formulário de Serviço ---
    const ServiceForm = () => {
        const [data, setData] = useState({
            nomeServico: '',
            valorBase: '',
            horasEstimadas: '',
            materiaisServico: '',
            custoServico: '',
            lucroServico: '',
            descricaoServico: '',
        });

        const handleChange = (field: keyof typeof data, value: string) => {
            setData(prev => ({ ...prev, [field]: value }));
        };

        return (
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Orçamento de Serviço</Text>
                <TextInput style={styles.input} placeholder="Nome do Serviço *" value={data.nomeServico} onChangeText={v => handleChange('nomeServico', v)} />
                <TextInput style={styles.input} placeholder="Materiais Utilizados *" value={data.materiaisServico} onChangeText={v => handleChange('materiaisServico', v)} />
                <View style={styles.inputRow}>
                    <View style={styles.inputGroup}><TextInput style={styles.input} placeholder="Valor Base (R$) *" value={data.valorBase} onChangeText={v => handleChange('valorBase', v)} keyboardType="numeric" /></View>
                    <View style={styles.inputGroup}><TextInput style={styles.input} placeholder="Horas Estimadas *" value={data.horasEstimadas} onChangeText={v => handleChange('horasEstimadas', v)} keyboardType="numeric" /></View>
                </View>
                <View style={styles.inputRow}>
                    <View style={styles.inputGroup}><TextInput style={styles.input} placeholder="Custo Materiais (R$) *" value={data.custoServico} onChangeText={v => handleChange('custoServico', v)} keyboardType="numeric" /></View>
                    <View style={styles.inputGroup}><TextInput style={styles.input} placeholder="Lucro (%) *" value={data.lucroServico} onChangeText={v => handleChange('lucroServico', v)} keyboardType="numeric" /></View>
                </View>
                <TextInput style={styles.input} placeholder="Descrição do serviço" value={data.descricaoServico} onChangeText={v => handleChange('descricaoServico', v)} multiline />
            </View>
        );
    };

    // --- Renderização Principal ---
    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <ScrollView style={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                {/* Seletor de Abas */}
                <View style={styles.tabSelectorContainer}>
                    <TouchableOpacity
                        style={[styles.tabButton, budgetType === 'produto' && styles.tabButtonActive]}
                        onPress={() => setBudgetType('produto')}
                    >
                        <Text style={[styles.tabText, budgetType === 'produto' && styles.tabTextActive]}>Produto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabButton, budgetType === 'servico' && styles.tabButtonActive]}
                        onPress={() => setBudgetType('servico')}
                    >
                        <Text style={[styles.tabText, budgetType === 'servico' && styles.tabTextActive]}>Serviço</Text>
                    </TouchableOpacity>
                </View>

                {/* Formulário Condicional */}
                {budgetType === 'produto' ? <ProductForm /> : <ServiceForm />}

                {/* Botão de Ação */}
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Em breve', 'A lógica para calcular e gerar o orçamento será implementada aqui.')}>
                    <Ionicons name="calculator-outline" size={20} color={styles.buttonText.color} />
                    <Text style={styles.buttonText}>Gerar Orçamento</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};
