// function Pessoa(nome) {
//     this.nome = nome
// }

// Pessoa.prototype.msg = function() {
//     alert("Olá "+this.nome)
// }

// let NovaPessoa = new Pessoa("José")
// let OutraPessoa = new Pessoa("Maria")

// NovaPessoa.msg()
// console.log(NovaPessoa)



let Pessoa = {
    'nome':"",
    'idade':""
}
Pessoa.__proto__.msg = function () {
    alert("Olá "+ Pessoa.nome)
}
let P = Pessoa
P.nome = "Gabriel"
P.msg()
console.log(P)