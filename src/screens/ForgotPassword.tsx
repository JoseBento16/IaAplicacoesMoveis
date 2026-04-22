import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function ForgotPasswordScreen() {
    const [email, setEmail] = useState<string>('');

    const handleResetPassword = () => {
        if (!email) {
            Alert.alert('Erro', 'Por favor, informe seu email.');
            return;
        }

        // Aqui você pode integrar com sua API futuramente
        Alert.alert('Sucesso', 'Link de recuperação enviado para seu email!');
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoFake}>
                <Text style={styles.logoTexto}>🔑</Text>
            </View>

            <Text style={styles.titulo}>Recuperar Senha</Text>

            <Text style={styles.subtitulo}>
                Digite seu email para receber o link de recuperação
            </Text>

            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TouchableOpacity style={styles.botao} onPress={handleResetPassword}>
                <Text style={styles.textoBotao}>Enviar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.linkCadastro}>
                    Voltar para login
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
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
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginTop: 12,
    },
    botao: {
        backgroundColor: '#4CAF50',
        padding: 14,
        borderRadius: 8,
        marginTop: 16,
        alignItems: 'center',
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    linkCadastro: {
        color: '#4CAF50',
        textAlign: 'center',
        marginTop: 16,
    },
});