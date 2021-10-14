let nome = "Gabriel Veloso"

//match()
// console.log(nome.match("Veloso"))

//search()
// console.log(nome.search("G"))

// // g/i/m
// g -> global
// i -> ignora case sense
// m -> 
// console.log(nome.search(/g/i))

//replace()
let trocar = nome.replace("G","g")
// console.log(trocar)

//localeCompare()
let nome2 = "Dayane Leal"
// console.log(nome.localeCompare(nome2))  igual retorna 0, diferente retorna 1 ou -1

//toString() -> Converte para string

//toLowerCase -> Converte para caracteres minúsculos
//toUpperCase -> Converte para caracteres maiúsculos

//trim() -> Remove espaços antes e depois da string

//NaN -> Not a Number
//isNan() -> Retorna true ou false

//toFixed()
let valor = 2.864
// console.log(valor.toFixed(2)) // arredonda para 2 casas decimais (p/ cima)

//toLocaleString() -> Para real
console.log(valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}))