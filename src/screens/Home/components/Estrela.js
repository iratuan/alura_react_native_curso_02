import React, {useState} from "react";
import { TouchableOpacity , Image, StyleSheet} from "react-native";
import estrela from '../../../../assets/estrela.png';
import estrelaCinza from '../../../../assets/estrelaCinza.png';

export default ({onPress, desabilitada=true, preenchida, isGrande=false}) => {

    const getImage = () => {
        if(preenchida){
            return estrela;
        }
        return estrelaCinza;
    }

    const estilos = funcaoEstilos(isGrande);

    return <TouchableOpacity
                onPress={onPress}
                disabled={desabilitada}>
                <Image source={getImage()} style={estilos.estrela} />
            </TouchableOpacity>
}

const funcaoEstilos = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2
    }
});