let pesquisa = (vetor, adicional, indice) => {
    vetor.push(adicional)
    let resultado = vetor.splice(indice,1)
    document.write(`O nome na ${indice+1}ª posição é ${resultado}`)
}

let nomes = [
    prompt("Digite o 1º nome:"),
    prompt("Digite o 2º nome:"),
    prompt("Digite o 3º nome:"),
    prompt("Digite o 4º nome:"),
    prompt("Digite o 5º nome:")
]

let f = (prompt("Digite qual nome deseja adicionar a lista:"))

let i = Number(prompt("O nome de qual posição deseja pesquisar:"))
while (i<1 || i>6) {
    alert("Digite um número entre 1 e 6!!")
    i = Number(prompt("O nome de qual posição deseja pesquisar:"))
}
i--

pesquisa(nomes,f,i)