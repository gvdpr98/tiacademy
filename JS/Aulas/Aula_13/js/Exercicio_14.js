let listar = (Listagem) => {
    for (let i of Listagem)
        for (let key in i) {
            document.write(`${key}: ${i[key]} <br>`)
        }
}

let Frutas = [
    {
        Fruta:prompt("Informe a Fruta:"),
        Preço:prompt("Qual o seu preço?"),
    },
    {
        Fruta:prompt("Informe a Fruta:"),
        Preço:prompt("Qual o seu preço?"),
    },
   {
        Fruta:prompt("Informe a Fruta:"),
        Preço:prompt("Qual o seu preço?"),
    },
    {
        Fruta:prompt("Informe a Fruta:"),
        Preço:prompt("Qual o seu preço?"),
    }
]

listar(Frutas)