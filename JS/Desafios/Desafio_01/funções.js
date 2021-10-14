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
let adicionarItens = () => {
    let listaCesta = document.querySelector("#cestaDoCliente")
    let selecao = document.querySelectorAll("#produtos > li")
    for (let iterator of selecao) {
        iterator.addEventListener('click',function(){
            for (let index = 0; index < listaDeProdutos.length; index++) {
                if (iterator.textContent == listaDeProdutos[index]){
                    if (selecionado[index] == true){
                        alert(`A fruta ${listaDeProdutos[index]} já está na cesta!!`)
                    } else {
                        const cestaLi = document.createElement('li')
                        listaCesta.appendChild(cestaLi).textContent = listaDeProdutos[index]
                        selecionado[index] = true
                        calcular("cestaDoCliente")
                        removerItem("cestaDoCliente")
                    }
                }
            }
            
        })  
    }
}
let removerItem = (id) => {
    let remover = document.querySelectorAll(`#${id} > li`) 
    for (let alterar of remover) {
        alterar.addEventListener('click', function(){
            for (let index = 0; index < listaDeProdutos.length; index++) {
                if (alterar.textContent == listaDeProdutos[index]) {
                    selecionado[index] = false
                    
                }
                
            }
            alterar.remove() 
            calcular("cestaDoCliente")

        })
    }
    
}

let calcular = (id2) => {
    let cestinha = document.querySelectorAll(`#${id2} > li`)
    let input = document.querySelector("#mostraTotalCompra")
    let valorAnterior = 0
    let resultado = 0
    if (cestinha.length <1) {
        input.value = `R$0,00`
    } else	{
        for (let somar of cestinha) {
            console.log(somar.length)
            for (let index = 0; index <listaDeProdutos.length; index++){
                if (somar.textContent == listaDeProdutos[index]) {
                    valorAnterior += precos[index] 
                }
            }
            resultado = valorAnterior.toFixed(2)
            input.value = `R$${resultado.replace(".",",")}`
        }
    }
}
export {adicionarItens}