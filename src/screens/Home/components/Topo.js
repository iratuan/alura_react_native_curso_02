import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import imgTopo from '../../../../assets/logo.png';

import { loadTopo } from '../../../services/loadDataService';

export default () => {

    const [boasVindas, setBoasVindas] = useState("");
    const [legenda, setLegenda] = useState("");

    useEffect(() => {
        setBoasVindas(loadTopo().boasVindas);
        setLegenda(loadTopo().legenda);

    }, [boasVindas, legenda])

    return <View style={estilos.topo}>
        <Image source={imgTopo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>{boasVindas}</Text>
        <Text style={estilos.legenda}>{legenda}</Text>
    </View>
}

const estilos = StyleSheet.create({

    topo: {
        backgroundColor: "#f6f6f6",
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color:"#464646"
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color:"#a3a3a3"
    }

});