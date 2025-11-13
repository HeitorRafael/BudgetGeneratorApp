import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { ThemedText, ThemedView } from '../../components'
import { useThemeColor } from '../../hooks'
import { useAuth } from '../../context/AuthContext'
import { StackScreenProps } from '@react-navigation/stack'
import { AppStackParamList } from '../../navigation/AppStack'

type HomeScreenProps = StackScreenProps<AppStackParamList, 'Home'>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#BCDBBC',
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#a3d5a3',
  },
  headerBrand: {
    fontSize: 24,
    fontWeight: '700',
    color: '#228F2F',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  headerButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#228F2F',
    borderRadius: 6,
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  contentRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
  },
  profileCard: {
    flex: 0.35,
    backgroundColor: '#BCDBBC',
    borderRadius: 12,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImagePlaceholder: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#228F2F',
    marginBottom: 4,
    textAlign: 'center',
  },
  profileEmail: {
    fontSize: 12,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  profileButton: {
    backgroundColor: '#228F2F',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    width: '100%',
    marginBottom: 8,
  },
  profileButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  budgetsCard: {
    flex: 0.65,
    backgroundColor: '#BCDBBC',
    borderRadius: 12,
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#228F2F',
    marginBottom: 12,
  },
  budgetsList: {
    flex: 1,
  },
  budgetItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  budgetItemText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  budgetItemEmpty: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  budgetItemEmptyText: {
    fontSize: 14,
    color: '#999',
  },
  emptyState: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  editFormContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    display: 'none',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 14,
  },
  formButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  formButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formButtonSave: {
    backgroundColor: '#228F2F',
  },
  formButtonCancel: {
    backgroundColor: '#999',
  },
  formButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
})

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [showEditForm, setShowEditForm] = useState(false)
  const [budgets, setBudgets] = useState<any[]>([])
  const primaryColor = useThemeColor({}, 'primary')
  const backgroundColor = useThemeColor({}, 'background')
  const insets = useSafeAreaInsets()
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    Alert.alert('Sair', 'Deseja realmente sair?', [
      {
        text: 'Cancelar',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Sair',
        onPress: async () => {
          await logout()
        },
        style: 'destructive',
      },
    ])
  }

  const handleGenerateBudget = () => {
    navigation.navigate('Orcamentos')
  }

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <ThemedText style={styles.headerBrand}>BudgetGenerator</ThemedText>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton} onPress={handleGenerateBudget}>
            <ThemedText style={styles.headerButtonText}>Gerar Orçamento</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton} onPress={handleLogout}>
            <ThemedText style={styles.headerButtonText}>Sair</ThemedText>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.contentRow}>
          {/* Profile Card */}
          <View style={styles.profileCard}>
            <View style={styles.profileImage}>
              <View style={styles.profileImagePlaceholder}>
                <Ionicons name="person-circle" size={80} color="#999" />
              </View>
            </View>
            <ThemedText style={styles.profileName}>{user?.name || 'Usuário'}</ThemedText>
            <ThemedText style={styles.profileEmail}>{user?.email || 'email@example.com'}</ThemedText>

            {!showEditForm && (
              <TouchableOpacity
                style={styles.profileButton}
                onPress={() => setShowEditForm(true)}
              >
                <ThemedText style={styles.profileButtonText}>Alterar Dados</ThemedText>
              </TouchableOpacity>
            )}
          </View>

          {/* Budgets Card */}
          <View style={styles.budgetsCard}>
            <ThemedText style={styles.cardTitle}>Orçamentos Gerados</ThemedText>
            {budgets.length === 0 ? (
              <View style={styles.budgetItemEmpty}>
                <ThemedText style={styles.budgetItemEmptyText}>
                  Nenhum orçamento encontrado.
                </ThemedText>
              </View>
            ) : (
              <ScrollView style={styles.budgetsList}>
                {budgets.map((budget, index) => (
                  <View key={index} style={styles.budgetItem}>
                    <ThemedText style={styles.budgetItemText}>
                      {budget.name}
                    </ThemedText>
                    <TouchableOpacity>
                      <Ionicons name="chevron-forward" size={20} color="#228F2F" />
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            )}
          </View>
        </View>

        {/* Edit Form */}
        {showEditForm && (
          <View style={[styles.editFormContainer, { display: 'flex' }]}>
            <ThemedText style={{ fontSize: 16, fontWeight: '600', marginBottom: 12 }}>
              Alterar Dados
            </ThemedText>

            {/* Email Input */}
            <View style={styles.input}>
              <ThemedText style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>
                Novo e-mail
              </ThemedText>
              {/* TODO: Implementar input de email */}
            </View>

            {/* Password Input */}
            <View style={styles.input}>
              <ThemedText style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>
                Nova senha
              </ThemedText>
              {/* TODO: Implementar input de senha */}
            </View>

            {/* Form Buttons */}
            <View style={styles.formButtons}>
              <TouchableOpacity
                style={[styles.formButton, styles.formButtonSave]}
                onPress={() => {
                  // TODO: Implementar salvar dados
                  setShowEditForm(false)
                }}
              >
                <ThemedText style={styles.formButtonText}>Salvar</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.formButton, styles.formButtonCancel]}
                onPress={() => setShowEditForm(false)}
              >
                <ThemedText style={styles.formButtonText}>Cancelar</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </ThemedView>
  )
}
