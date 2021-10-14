let resultados = (respCep) => {
    for (let index in respCep) {
        if (document.querySelector(`#${index}`)) {
            document.querySelector(`#${index}`).value = respCep[index]
        }
    }
}

let dadosCEP = async function (Cep) {
    let url = `https://viacep.com.br/ws/${Cep}/json/`
    try {
        let dadosCEP = await fetch(url)
        let dadosJson = await dadosCEP.json()
        resultados(dadosJson)  
    } catch (e){
        alert(e)
    }
    
}
let buscar = () => {
    const btn = document.querySelector('#btn')
    const cep = document.querySelector('#cep')
    btn.addEventListener('click',function(){
        dadosCEP(cep.value)
    })
}

export {buscar}