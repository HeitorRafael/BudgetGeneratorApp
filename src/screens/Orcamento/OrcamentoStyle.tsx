// src/screens/Orcamento/OrcamentoStyle.tsx

import { StyleSheet } from 'react-native';

// Você pode exportar mais de um objeto de estilo se necessário, mas o padrão é um
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Um fundo claro para começar
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  listContent: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 8, // Espaço entre os itens
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    elevation: 2, // Sombra suave no Android
    shadowColor: '#000', // Sombra suave no iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  budgetTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  valueText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff', // Cor azul para destaque
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#888',
  }
});