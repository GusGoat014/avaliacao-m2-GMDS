import React from "react"
import { useState } from "react"
import { View, Text, Button, StyleSheet } from "react-native"

export default function Interruptor(props) {
    const [ligado, setLigado] = useState(false)

    const styles = StyleSheet.create({
        container: {
            borderWidth: 1,
            padding: 20,
            margin: 20
        }
    })


    return (
        <View style={styles.container}>
            <Text>{props.nome} {ligado ? "Ligado" : "Desligado"}</Text>
            <Button title={!ligado ? 'Ligado' : 'Desligado'} onPress={() => {
                if (ligado == false) {
                    setLigado(true)
                } else if (ligado == true) {
                    setLigado(false)
                }
            }} />
        </View>
    )


}