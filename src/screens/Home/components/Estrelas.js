import React, {useState} from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Estrela from "./Estrela";


export default ({
    quantidade: quantidadeInicial,
    editavel = false,
    isGrande = false
}) => {

    const [quantidade, setQuantidade] = useState(quantidadeInicial)

    const RenderEstrelas = () => {
        const estrelas = [];
        for (let i = 0; i < 5; i++) {
           estrelas.push(<Estrela 
           onPress={()=> setQuantidade(i + 1)}
           desabilitada={!editavel}
           isGrande={isGrande}
           preenchida={i < quantidade}/>);
        }
        return estrelas;
    }
    
    return <View style={estilos.estrelas}>
        <RenderEstrelas />
    </View>
}


const estilos =  StyleSheet.create({
    estrelas: {
        flexDirection: 'row'
    }

});