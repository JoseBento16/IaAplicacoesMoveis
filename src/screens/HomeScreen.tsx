import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.logoFake}>
                <Text style={styles.logoTexto}>💰</Text>
            </View>

            <Text style={styles.titulo}>Bem-vindo!</Text>

            <Text style={styles.subtitulo}>
                Gerencie suas finanças de forma simples e rápida
            </Text>

            <TouchableOpacity style={styles.card}>
                <Text style={styles.cardTitulo}>💸 Despesas</Text>
                <Text style={styles.cardTexto}>Veja e controle seus gastos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <Text style={styles.cardTitulo}>📈 Receitas</Text>
                <Text style={styles.cardTexto}>Acompanhe seus ganhos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <Text style={styles.cardTitulo}>📊 Relatórios</Text>
                <Text style={styles.cardTexto}>Visualize gráficos e análises</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
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
        marginBottom: 20,
    },
    card: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
        marginTop: 12,
    },
    cardTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardTexto: {
        fontSize: 14,
        marginTop: 4,
    },
    botao: {
        backgroundColor: '#4CAF50',
        padding: 14,
        borderRadius: 8,
        marginTop: 24,
        alignItems: 'center',
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});