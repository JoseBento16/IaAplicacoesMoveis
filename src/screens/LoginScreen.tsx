import { View, Text, StyleSheet, Image } from 'react-native';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.logoFake}>
                <Text style={styles.logoTexto}>💰</Text>
            </View>

            <Text style={styles.titulo}>FinanceApp</Text>

            <Text style={styles.subtitulo}>
                Controle suas finanças com facilidade
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
        alignSelf: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitulo: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 8,
    },
    logoFake: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    logoTexto: {
        fontSize: 32,
    },
});