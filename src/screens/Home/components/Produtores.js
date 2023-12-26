import React from "react";
import useProdutores from "../hooks/useProdutores";
import { Text, SafeAreaView, View, FlatList, Image, StyleSheet } from "react-native";
import CardProdutor from "./CardProdutor";


export default ({topo:Topo}) => {
    const [titulo, produtores] = useProdutores();   

    const TopoLista = () => {
        return <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
        </>
    }

    return <>
        <SafeAreaView>
            <FlatList
                ListHeaderComponent={TopoLista}
                data={produtores}
                renderItem={({ item }) => <CardProdutor
                    nome={item.nome}
                    imagem={item.imagem}
                    distancia={item.distancia}
                    estrelas={item.estrelas} />}
                keyExtractor={item => item.nome}                
            />
        </SafeAreaView>
    </>
}


const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: "#464646"
    }
});