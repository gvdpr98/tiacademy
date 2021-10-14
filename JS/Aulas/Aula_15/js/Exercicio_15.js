let tabuada = (num) => {
    while (num < 1 || num > 10) {
        alert("Número inválido!")
        num = prompt("Digite um número entre 1 e 10:")
    }
    for (let i = 1; i <= 10; i++) {
    document.write(`${num} X ${i} = ${num*i} <br>`)
    }
}

window.onload = function () {
    const evento = document.getElementById('txt')
    const acao = document.getElementById('btn')
    acao.addEventListener('click',function(){
       tabuada(Number(evento.value)) 
    })
}