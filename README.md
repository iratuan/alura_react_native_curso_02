# Tutorial de APP React Native 
Fonte: [Alura](https://cursos.alura.com.br/course/react-native-utilizando-criando-hooks)

_____
### Sobre o app
O foco desse tutorial é construir um APP utilizando react native e react native CLI, ou seja, não utilizaremos o EXPO para esse tutorial.

Para seguir esse tutorial, é importante que você já tenha o ambiente configurado e existem vários tutoriais explicando como configurar, então, peço que recorra aos vários tutoriais existentes, configure o seu ambiente e retome a partir desse ponto.

### Criando um novo projeto

Para criar um novo projeto, abra o terminal em um diretório de sua preferência e digite o comando abaixo:

````bash
npx react-native init orgs_hooks
````

Esse comando pode demorar um pouco para executar, mais irá criar uma estrutura de projeto já configurada para iniciarmos nosso tutorial.

Abra o diretório do projeto recém criado e abra o arquivo App.tsx e vamos retirar alguns códigos, que, nesse ponto, são desnecessários.
A aparência do arquivo deve ser essa abaixo.

```javascript
import React from 'react';
import {Text} from 'react-native';

export default  () => {
  return (
    <Text>Esse é meu APP</Text>
  );
}
```

Agora, usando o terminal de sua preferência, navegue até o diretório do projeto e rode o comando abaixo:

```bash 
npm run start  
```
Isso irá iniciar o Metro, uma engine que irá auxiliar durante todo o desenvolvimento do projeto.

Abra uma outra aba ou janela do seu terminal e digite o seguinte:

```bash 
npm run android  
```
ou (no caso de estar utilizando um mac ou macbook)
```bash 
npm run ios  
```
Feito isso, provavelmente você irá visualizar em seu emulador uma tela em branco, com um texto próximo ao topo. Caso isso não ocorra, reveja os passos de configuração do seu ambiente de desenvolvimento.
____

### Criando a estrutura de pastas

Dentro do diretório do projeto, crie a pasta src, onde iremos codificar os arquivos do projeto.
Dentro de src, crie mais um diretório chamado screens, onde as telas serão codificadas.
Dentro de screens, vamos criar um diretório para cada tela, inciando pela tela Home, então, crie um diretório Home dentro de screens.
Dentro de Home, iremos criar um arquivo chamado Index.js e um diretório novo, chamado components.
Dentro de components, iremos criar um componente novo, chamado Topo.js

Sua estrutura de projeto deve ser parecido com a árvore abaixo.

```
app
-- src
-----screens
---------Home
-------------components
------------------Topo.js
-------------Index.js
```

Na raiz do projeto, crie a pasta assets e coloque os arquivos abaixo dentro dela.
[Assets](https://github.com/alura-cursos/react-native-utilizando-e-criando-hooks/raw/main/assets.zip)

Em seguida, iremos criar nossa primeira tela, com seu primeiro componente, o topo.
______
### Criando a nossa primeira tela e nosso primeiro componente

Agora iremos criar a primeira tela e nosso primeiro componente, naqueles arquivos Index.js e Topo.js criados na etapa anterior desse tutorial.


O arquivo Index.js deve estar da seguinte forma.
```javascript
import React from "react";
import Topo from "./components/Topo";

export default () => {
    return <>
        <Topo />
    </>
}
```

e o arquivo Topo.js assim:
```javascript
import React from "react";
import { View, Text, Image } from "react-native";
import ImgTopo from '../../../../assets/logo.png';

export default ()=>{
    return<View>
        <Image source={ImgTopo} />
    </View>
}
```
Note as referencias dentro do arquivo Index, inserindo o componente Topo como parte do layout.

Agora, iremos alterar o arquivo App.tsx para exibir a nossa Home como primeira tela do app.

Altere o arquivo App.tsx para o seguinte código:
```javascript
import React from 'react';
import {Text} from 'react-native';
import Home from './src/screens/Home/Index';

export default  () => {
  return (
    <Home />
  );
}
```
Rode novamente o projeto e você terá uma nova tela, exibindo uma imagem, que é a componente Topo que criamos há pouco.
______

### Estilizando o componente Topo.js
Vamos melhorar a apresentação do nosso componente Topo.js, aplicando alguns estilos ao mesmo.

Primeiramente, vamos modificar um pouco o conteúdo do componente, conforme o código abaixo:

```javascript
import React from "react";
import {StyleSheet, View, Text, Image } from "react-native";
import ImgTopo from '../../../../assets/logo.png';

export default ()=>{
    return<View>
        <Image source={ImgTopo} />
        <Text>Olá usuário</Text>
        <Text>Encontre aqui os melhores produtores</Text>
    </View>
}
```
Em seguida, iremos criar uma constante que será responsável pela formatação do componente.

Crie o seguinte bloco, no final do arquivo Topo.js
```javascript
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
```

A aparencia do seu arquivo final deve ser algo como:

```javascript
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
```
____
### Mockando os dados
Precisaremos agora mockar algumas informações para que elas não fiquem estáticas no código.
Inciaremos baixando [esses arquivos](https://github.com/alura-cursos/react-native-utilizando-e-criando-hooks/tree/Aula2/src/mocks) e salvando dentro de um diretório chamado services, que deverá ficar dentro de src.
Assim, a estrutura de pastas deve ficar parecida com isso aqui.

```
app
-- src
-----services
---------produtores.js
---------topo.js
-----screens
---------Home
-------------components
------------------Topo.js
-------------Index.js
```

Crie tambpem um arquivo chamado loadDataService.js dentro da pasta services e coloque o seguinte código dentro.

```javascript
import produtores from "./produtores";
import topo from "./topo";

export const loadTopo = () => topo;
export const loadProdutores = () => produtores;
```

Esse arquivo será responsável por carregar os dados e servir a nossa aplicação.
É nesse ponto aqui que faríamos uma integração com uma API externa, por exemplo.

Iremos agora modificar o nosso arquivo Topo.js para utilizar os dados.
Temos alguns detalhes importantes nesse arquivo.

Atualize o código de Topo.js para ficar como o arquivo abaixo:

```javascript
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

    }, [])

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

```
Note o uso de states e effects para carregar os dados e setar os valores.
Recomendo uma lida na documentação oficial do react para entender melhor esses pontos. 
Futuramente, irei atualizar essa documentação para conter um texto explicando em detalhes o uso dos mesmos.
Eu prometo!
_____
### Criando o componente de listagem de produtores

Nessa etapa iremos criar um componente que irá listar os produtores do nosso app.

No componente Produtores.js, modifique o código para o exemplo abaixo:
```javascript
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
    }
});
```

Modifique também o arquivo index.js dentro de Home para o código abaixo:
```javascript
import React from "react";
import Topo from "./components/Topo";
import Produtores from "./components/Produtores";

export default () => {
    return <Produtores topo={Topo}/>
}
```

E o arquivo App.tsx para:
```javascript
import React from 'react';
import Home from './src/screens/Home/Index';
import { SafeAreaView, StyleSheet } from 'react-native';

export default () => {
  return (
    <SafeAreaView style={estilos.tela}>
      <Home />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1
  }
});
```

Isso irá atualizar nosso layout para exibir a lista de produtores.
_____
### Dicas finais.
Nosso projeto final está levemente diferente do abordado até aqui.
Recomendo que você baixe o projeto todo, acompanhe o tutorial e compare os resultados finais.
Grande abraço e até a próxima.
