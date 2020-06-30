# Seu Barriga Testes End To End

Cenários de teste para a página https://seubarriga.wcaquino.me/ contemplando o login e o cadastro de novos usuários.

## Pré-requisitos para rodar os testes

Para rodar os testes, você precisará ter o Node.js instalado na sua máquina.

### Node
- #### Instalação do Node no Windows
    Acesse a página oficial do Node.js (https://nodejs.org) e baixe o instalador.
Tenha certeza também que tem o `git` disponível no seu PATH, você também pode precisar do `npm`.

- #### Instalação do Node no Ubuntu
    Você pode instalar facilmente o nodejs e o npm com um apt install, basta seguir os seguintes comandos.
        $ sudo apt install nodejs
        $ sudo apt install npm

- #### Outros sistemas operacionais
    Você pode achar mais informações sobre a instalação no site oficial do Node.js (https://nodejs.org/) e no site oficial do NPM.

Para verificar que a instalação foi feita com sucesso, você pode seguir os seguintes comandos.

$ node --version
v12.14.1

$ npm --version
6.13.4

## Clonando o projeto

Para clonar o projeto, basta criar uma pasta no seu computador, acessá-la pelo terminal e utilizar o seguinte comando.

$ git clone https://github.com/matheus-aaraujo/seu-barriga-e2e.git

## Instalando o projeto

Para instalar o projeto na sua máquina, basta instalar todas as dependências presentes no arquivo `package.json` usando o seguinte comando no seu terminal.

$ npm install

## Rodando o projeto

Para rodar o projeto, basta utilizar o seguinte comando.

$ npm run cy:open

