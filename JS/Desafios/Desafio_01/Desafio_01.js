import {adicionarItens} from './funções.js'
window.onload = function () {
    let listaDeProdutos = [
        "Mamão Papaia",
        "Laranja",
        "Manga",
        "Melão",
        "Melancia"
    ] 
    const ulLista = document.querySelector("#produtos");
    (()=>{
        for (let i = 0; i < listaDeProdutos.length; i++) {
            const filhoLi = document.createElement('li')
            ulLista.appendChild(filhoLi).textContent = listaDeProdutos[i]
        }
    })()
    adicionarItens()
}
