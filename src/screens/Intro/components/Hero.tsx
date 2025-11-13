import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { useThemeColor } from '../../../hooks'
import { ThemedText } from '../../../components'

const styles = StyleSheet.create({
    heroContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
        gap: 20,
    },
    heroText: {
        flex: 1,
    },
    heroTitle: {
        fontSize: 28,
        lineHeight: 36,
        marginBottom: 12,
        fontWeight: '700',
    },
    heroSubtitle: {
        fontSize: 16,
        lineHeight: 24,
    },
    mascoteImage: {
        width: 160,
        height: 160,
        borderRadius: 12,
        resizeMode: 'contain',
    },
})

interface HeroProps {
    onLoginPress: () => void
}

export const Hero: React.FC<HeroProps> = ({ onLoginPress }) => {
    const primaryColor = useThemeColor({}, 'primary')

    return (
        <View style={styles.heroContainer}>
            <View style={styles.heroText}>
                <ThemedText style={[styles.heroTitle, { color: primaryColor }]}>
                    Gere Orçamentos Profissionais com IA
                </ThemedText>
                <ThemedText style={styles.heroSubtitle}>
                    Transforme suas ideias em orçamentos detalhados e precisos com a ajuda da nossa inteligência artificial. Perfeito para profissionais iniciantes e experientes.
                </ThemedText>
            </View>

            <Image
                source={require('../../assets/icon.png')}
                style={styles.mascoteImage}
            />
        </View>
    )
}
