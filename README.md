# Api GraphQL simples

Desenvolvi essa Api para servir os dados para uma aplicação rect native mo ile e web.
Ao criar essa api pude colocar em prática conceitos e habilidades como GraphQL e NestJS, aprendi na prática.

## Tabela de conteúdos

- [Sobre o app](#sobre-o-app)
- [Instruções de execução](#instruções-de-execução)

## Sobre o app


**Nest.js**

*Usei Nest.js para o back-end devido sua facilidade em criar rotas GraphQL

**Redis**
Cheguei a configurar o Redis mas no meio do caminho tive problemas, mas voltarei depois para rever essa parte da configuração.

**MySQL e typeOrm**

Configurei todo o banco e a forma com a aplicação interage com ele, porém por algum motivo que ainda nao descobrir as rotas retirnava listas vazias, então vomo solução temporária criei mocks de dados para que a api pudesse servir o app react web.

## Instruções de execução

`Como requisito desse projeto voce precisa ter instalado o MySQL na sua maquina`

Para executar esse projeto faça o `git clone  git@github.com:jadsoncerqueira/minha-api.git`.

Execute o `npm install`.

Na raiz do projeto renomeio o arquivo `.env.example` para `.env`, depois abra o arquivo e altere as variaveis de ambiente com os dados do seu banco Mysql.

```
NODE_TYPE=
NODE_HOST=
NODE_PORT=
NODE_USERNAME=
NODE_PASSWORD=
NODE_DATABASE=
```

e por fim por fim rode a api com o comando `npm run start`

Caso voce queira ver ou mudar a porta que a api irá executar, vá ate o arquivo `src/main.ts` e altere a linha 6 da porta 3000 para alguma outra de sua escolha.

Após tudo ocorrer bem vá ate o repositorio do app react native web `https://github.com/jadsoncerqueira/front-end` e siga as instruções para executar ele, onde essa api que você acabou de executar sera consumida por ele 
