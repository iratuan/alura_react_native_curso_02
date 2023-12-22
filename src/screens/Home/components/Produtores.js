import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, FlatList, Image, StyleSheet } from "react-native";
import { loadProdutores } from '../../../services/loadDataService';


const Item = ({ nome, imagem, distancia, estrelas }) => (
    <View key={nome}>
        <Image source={imagem} />
        <Text>{nome}</Text>
    </View>
);



export default ({topo:Topo}) => {

    const [titulo, setTitulo] = useState("");
    const [produtores, setProdutores] = useState([]);

    useEffect(() => {
        setTitulo(loadProdutores().titulo);
        setProdutores(loadProdutores().lista);
    }, [])

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
                renderItem={({ item }) => <Item
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
    },


});