import React from "react";
import {StyleSheet, View, Text, Image } from "react-native";
import ImgTopo from '../../../../assets/logo.png';

export default ()=>{
    return<View style={estilos.topo}>
        <Image source={ImgTopo} style={estilos.imagem}/>
        <Text style={estilos.boasVindas}>Olá usuário</Text>
        <Text style={estilos.legenda}>Encontre aqui os melhores produtores</Text>
    </View>
}

const estilos = StyleSheet.create({

    topo:{
        backgroundColor:"#e6e6e6",
        padding:16,
    },
    imagem:{
        width:70,
        height:28
    }, 
    boasVindas:{
        marginTop:24,
        fontSize:26,
        lineHeight:42,
        fontWeight:'bold'
    }, 
    legenda:{
        fontSize:16, 
        lineHeight:26
    }

});