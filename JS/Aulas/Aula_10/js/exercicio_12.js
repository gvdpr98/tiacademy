let exercicio12 = (teste) => {
    document.write(`Esta palavra tem ${teste.length} caracteres. ${"<br>"}`)
    teste = teste.toUpperCase()
    document.write(teste+"<br>")
    document.write(`A letra ${teste[2]} é o 3º caracter da palvra ${teste}. ${"<br>"}`)
    document.write(`${teste} ficou ${teste.replace(teste[2],"X")}`)
}

let palavra = prompt("Digite a palavra:")
exercicio12(palavra)