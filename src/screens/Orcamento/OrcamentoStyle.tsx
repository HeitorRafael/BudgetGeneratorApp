import { StyleSheet } from 'react-native';

// Paleta de Cores do Projeto
const COLORS = {
    primary: '#228F2F', // Verde principal
    dark: '#113815',    // Verde escuro
    light: '#BCDBBC',   // Verde claro
    white: '#FFFFFF',
    gray: '#F0F2F5',    // Fundo suave
    text: '#333333',
    danger: '#E74C3C',
};

export const styles = StyleSheet.create({
    // --- Containers ---
    container: {
        flex: 1,
        backgroundColor: COLORS.gray,
    },
    scrollContainer: {
        padding: 20,
    },
    section: {
        backgroundColor: COLORS.white,
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 3,
    },

    // --- Seletor de Abas (Tabs) ---
    tabSelectorContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        borderRadius: 12,
        padding: 4,
        marginBottom: 20,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    tabButtonActive: {
        backgroundColor: COLORS.primary,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    tabText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    tabTextActive: {
        color: COLORS.white,
    },

    // --- Títulos e Textos ---
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.dark,
        marginBottom: 15,
    },
    totalText: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.text,
    },
    totalValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.primary,
    },

    // --- Formulário ---
    input: {
        backgroundColor: COLORS.gray,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        marginBottom: 12,
        color: COLORS.text,
    },
    inputRow: {
        flexDirection: 'row',
        gap: 10,
    },
    inputGroup: {
        flex: 1,
    },

    // --- Botões ---
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 8,
    },
});