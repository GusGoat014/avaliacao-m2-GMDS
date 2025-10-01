import Interruptor from "../components/Interruptor";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PainelDeControleScreen() {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20
        },
        titulo: {
            fontWeight: 'bold',
            fontSize: 40
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Painel de Controle da Casa</Text>
            <Interruptor nome='Luz da Sala'/>
            <Interruptor nome='Ar Condicionado'/>
            <Interruptor nome='Luz do Quarto'/>
        </View>
    )
}