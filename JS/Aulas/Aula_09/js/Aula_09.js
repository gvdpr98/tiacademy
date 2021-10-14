let nomes = ["Ana", "André", "Dayane"]
let nomes2 = ["Sérgio", "Alessandra"]

//concat() -> Juntar 2 arrays
let concatenar = nomes.concat(nomes2)
// console.log(concatenar)

//indexOf() -> Mostra a posição de um item do array
let index = nomes.indexOf("André")
// console.log(index)

//join() -> Transforma elementos de um array em uma string
let joinar = nomes.join()
// console.log(joinar)

//push() -> Insere elementos no fim do array
nomes.push("Marcos")
// console.log(nomes)

//pop() -> Remove o último elemento do array
nomes.pop()
// console.log(nomes)

//reverse() -> Inverte a ordem do array
nomes.reverse()
// console.log(nomes)

//unshift() -> Insere elementos no começo do array
nomes.unshift("Marcos")
// console.log(nomes)

//shift() -> Remove o 1º item do array
nomes.shift()
// console.log(nomes)

//sort() -> Ordem crescente
let numeros = [1, 5, 9, 4, 7, 50, 45, 925, 46]
// console.log(numeros)
numeros.sort()
// console.log(numeros)
nomes.sort()
// console.log(nomes)

//toString() -> Converte em string e retorna a string
// console.log(nomes.toString())

// //splice() -> Corta ou remove um elemento de um array num ponto indicado
// let novos = nomes.splice(0,2)
// console.log(novos)
// console.log(nomes)

