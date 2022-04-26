//O Objetivo desse estudo é entender e aprender mais sobre funções de array com o javascript.

//Exempos inseridos na Lista 
var fruits = ['Apple', 'Banana', 'Papaya'];
console.log(fruits);

// Acessar um elemento do array
var first = fruits[0];
console.log(first);

var last = fruits[fruits.length - 1];
console.log(last);

// Interar um array
fruits.forEach(function (item, indice, array) {
    console.log(item, indice);
});

// Adicionar um elemento no final do array
var add = fruits.push('Mango');
console.log(fruits);

// Remover um item do começo do array
var remove = fruits.shift();
console.log(fruits);

// Adicionar um item no começo do array
var addAtTop = fruits.unshift('Strawberry');
console.log(fruits);

// Procurar o índice de um item no array
fruits.indexOf('Banana');
console.log(fruits);

var pos = fruits.indexOf('Banana');
console.log(pos);

// Remover um item pela posição do índice
var removeByIndex = fruits.splice(pos, 1);
console.log(fruits);

// Remover itens de uma posição do índice
var vegetable = ['Cabbage', 'Carrot', 'Radish'];
console.log(vegetable);

var pos = 1,
    n = 2;

var removedItems = vegetable.splice(pos, n);

console.log(vegetable);
console.log(removedItems);

// Copiar um array
var copy = fruits.slice();
console.log(copy);