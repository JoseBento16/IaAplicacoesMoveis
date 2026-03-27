import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';


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
            <TextInput
                placeholder="Email"
                style={styles.input}
            />

            <TextInput
                placeholder="Senha"
                secureTextEntry
                style={styles.input}
            />
            <Text style={styles.link}>Esqueceu a senha?</Text>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>
            <Text style={styles.linkCadastro}>
                Não tem conta? Cadastre-se
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
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginTop: 12,
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
    link: {
        color: '#4CAF50',
        textAlign: 'right',
        marginTop: 8,
    },
    linkCadastro: {
        color: '#4CAF50',
        textAlign: 'center',
        marginTop: 16,
    },
});