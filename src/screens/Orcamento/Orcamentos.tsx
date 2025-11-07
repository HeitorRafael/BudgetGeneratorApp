import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";


// 1. Tipagem e Dados Mock (Simulação)

interface Budget {
  id: string;
  name: string;
  dateCreated: string;
}

const MOCK_BUDGETS: Budget[] = [
  { id: '1', name: 'Reforma da Casa', dateCreated: '2025-10-25' },
  { id: '2', name: 'Viagem para a Praia', dateCreated: '2025-11-01' },
  { id: '3', name: 'Novo Computador', dateCreated: '2025-11-05' },
];



const BudgetItem = ({ item }: { item: Budget }) => ( 

  <TouchableOpacity style={styles.itemContainer} 
    onPress={() => console.log(`Abrir detalhes do orçamento: ${item.name}`)}>
    
    <Text style={styles.budgetTitle}>{item.name}</Text>
    
  </TouchableOpacity>
);


export const OrcamentosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Meus Orçamentos</Text>
      
      <FlatList
        data={MOCK_BUDGETS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BudgetItem item={item} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>Nenhum orçamento encontrado.</Text>
        )}
      />
      
    </View>
  );
};

// ------------------------------------------
// 4. Estilização
// ------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
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
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  budgetTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  dateText: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  valueText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745', 
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#888',
  }
});
