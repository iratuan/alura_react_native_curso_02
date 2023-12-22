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
