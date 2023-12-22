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
