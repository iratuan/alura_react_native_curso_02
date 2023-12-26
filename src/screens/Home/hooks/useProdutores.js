import { useState, useEffect } from "react";
import { loadProdutores } from '../../../services/loadDataService';

export default () => {
    const [titulo, setTitulo] = useState("");
    const [produtores, setProdutores] = useState([]);

    useEffect(() => {
        setTitulo(loadProdutores().titulo);
        setProdutores(loadProdutores().lista);
    }, [])

    return [titulo, produtores]
}