window.onload = function () {
    let listaDeProdutos = [
        "Mamão Papaia",
        "Laranja",
        "Manga",
        "Melão",
        "Melancia"
    ] 
    let precos = [
        2.50,
        6.99,
        7.69,
        9.75,
        10.99
    ] 
    let selecionado = [
        false,
        false,
        false,
        false,
        false
    ]
    const ulLista = document.querySelector("#produtos");
    (()=>{
        for (let i = 0; i < listaDeProdutos.length; i++) {
            const filhoLi = document.createElement('li')
            ulLista.appendChild(filhoLi).textContent = listaDeProdutos[i]
        }
    })()
    let listaCesta = document.querySelector("#cestaDoCliente")
    let selecao = document.querySelectorAll("#produtos > li")
    let input = document.querySelector("#mostraTotalCompra")
    let valorAnterior = 0
    selecao.addEventListener('click',function(){
        for (let j of selecao) {
            for (let i = 0; i < listaDeProdutos.length; i++) {
            if (listaDeProdutos[i] == j.textContent) {
                if (selecionado[i] == true) {
                    alert(`A fruta ${listaDeProdutos[i]} já foi selecionada!`)
                } else {
                    const listaFinal = document.createElement('li')
                    listaCesta.appendChild(listaFinal).textContent = listaDeProdutos[i]
                    valorAnterior += precos[i]
                    const imprimir = valorAnterior.toFixed(2)
                    input.value = "R$"
                    input.value += imprimir.toString().replace(".",",")
                    selecionado[i] = true
                }
                
            }
        }
        }
        
    })
}
