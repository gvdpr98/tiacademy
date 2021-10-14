let tabuada = (num) => {
    while (num < 1 || num > 10) {
        alert("Número inválido!")
        num = prompt("Digite um número entre 1 e 10:")
    }
    for (let i = 1; i <= 10; i++) {
    document.write(`${num} X ${i} = ${num*i} <br>`)
    }
}

tabuada(Number(prompt("Digite um número entre 1 e 10:")))