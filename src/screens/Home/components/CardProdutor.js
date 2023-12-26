import React, { useReducer, useState } from "react";
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity } from "react-native";
import Estrelas from "./Estrelas";

const _width = Dimensions.get('window').width;

export default ({ nome, imagem, distancia, estrelas }) => {
    //const [selecionado, setSelecionado] = useState(false)
    const [selecionado, inverterSelecao] = useReducer((selecionado)=>!selecionado, false)
    return <>
        <TouchableOpacity 
        style={estilos.container}
        onPress={inverterSelecao}>
            <Image source={imagem} style={estilos.imagem} accessibilityLabel={nome} />
            <View style={estilos.containerTituloEstrelas}>
                <Text style={estilos.titulo}>{nome}</Text>
                <Estrelas quantidade={estrelas} editavel={selecionado} isGrande={selecionado}/>
            </View>
            <Text style={estilos.distancia}>{distancia}</Text>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    container: {
        width: (_width - 16 * 2),
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 8,
        backgroundColor: "#e6e6e6",
        borderRadius: 6,
        marginTop: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: { width: -2, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    imagem: {
        width: 50,
        height: 50,
        borderRadius: 8
    },
    containerTituloEstrelas: {
        flexDirection: 'column',
        alignItems:'flex-start',
        justifyContent:'space-between',
        padding: 8,
        flexGrow: 2
    },
    titulo: {
        fontWeight: 'bold',
        color: "#464646"
    },
    distancia: {
        fontSize: 10,
        fontWeight: 'bold'
    }
});