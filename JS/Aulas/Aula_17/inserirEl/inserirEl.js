window.onload = function(){
    const cadastrar = document.querySelector("#cadastrar")
    const produto = document.querySelector("#produto")
    const lista = document.querySelector("#listaDeProdutos") 
    cadastrar.addEventListener('click',function(){
        let listaLi = document.createElement('li')
        lista.appendChild(listaLi).setAttribute('class','listaDeFrutas')
        lista.appendChild(listaLi).textContent = produto.value
    })
}