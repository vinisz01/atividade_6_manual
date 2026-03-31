# Manual Básico de JavaScript para Páginas Web

## Introdução

JavaScript é uma linguagem de programação utilizada no desenvolvimento de páginas web. Ela permite criar interações e comportamentos dinâmicos dentro de um site. Enquanto o HTML define a estrutura da página e o CSS define a aparência visual, o JavaScript é responsável pelas ações que acontecem na página.

Com JavaScript é possível responder a cliques de botões, validar formulários, alterar textos ou estilos de elementos e realizar cálculos. Por esse motivo, ele é considerado uma das principais linguagens utilizadas no desenvolvimento web.

## Formas de uso no HTML

JavaScript pode ser utilizado de duas formas dentro de uma página web. A primeira forma é escrever o código diretamente dentro do arquivo HTML utilizando a tag script. Nesse caso, o código fica dentro da própria página.

A segunda forma é utilizar um arquivo separado com extensão .js. O arquivo HTML apenas importa esse arquivo utilizando a tag script com o atributo src. Essa forma é mais organizada e facilita a manutenção do código.

## Variáveis, tipos e escopo

Uma variável é utilizada para armazenar informações dentro de um programa. Em JavaScript existem três formas principais de declarar variáveis: var, let e const.

A palavra-chave var foi utilizada nas primeiras versões da linguagem e possui escopo de função. Isso significa que ela pode ser acessada mesmo fora de alguns blocos de código.

A palavra-chave let possui escopo de bloco, ou seja, só pode ser utilizada dentro do bloco em que foi declarada.

A palavra-chave const é utilizada para declarar valores que não devem ser alterados após a criação.

O escopo define onde a variável pode ser utilizada no código. O escopo global permite que a variável seja acessada em qualquer parte do programa. O escopo de função limita o uso da variável à função onde foi criada. Já o escopo de bloco limita o uso ao bloco de código.

## Operadores, comparações e lógica

JavaScript possui operadores aritméticos como soma, subtração, multiplicação e divisão. Também possui operadores relacionais utilizados para comparar valores.

Entre os operadores de comparação estão ==, ===, != e !==. O operador == compara apenas o valor, enquanto === compara valor e tipo de dado. O operador != verifica se os valores são diferentes e !== verifica se os valores ou tipos são diferentes.

Utilizar === costuma ser mais seguro porque evita conversões automáticas de tipo.

## Estruturas condicionais

As estruturas condicionais permitem que diferentes partes do código sejam executadas dependendo de uma condição.

A estrutura if executa um bloco de código quando a condição é verdadeira. A estrutura if...else permite executar um bloco quando a condição é verdadeira e outro quando é falsa.

O switch é utilizado quando uma variável pode ter vários valores possíveis.

## Estruturas de repetição

Estruturas de repetição permitem executar um mesmo trecho de código várias vezes.

O for é utilizado quando sabemos quantas vezes o código deve ser executado. O while executa o código enquanto uma condição for verdadeira.

## Funções

Funções são blocos de código reutilizáveis que executam uma tarefa específica. Elas ajudam a organizar o código e evitam repetição.

Uma função pode receber parâmetros e também pode retornar um valor utilizando a palavra return.

## Manipulação de página com JavaScript

JavaScript permite manipular elementos da página através do objeto document.

Com métodos como getElementById e querySelector é possível selecionar elementos da página. A propriedade value permite acessar valores de campos de formulário, checked verifica se um campo está marcado e textContent permite alterar textos.

Também é possível modificar estilos utilizando style, alterar classes com classList e responder a eventos utilizando addEventListener.

Existem ainda métodos como querySelectorAll, checkValidity, createElement, appendChild e remove que permitem manipular elementos da página de forma dinâmica.