window.onload = function(){
    let primeiroInput = document.querySelector("#primeiroInput")
    let segundoInput = document.querySelector("#segundoInput")
    let resultado = document.querySelector("#resultado")
    segundoInput.addEventListener('blur',function(){
        resultado.value = Number(primeiroInput.value)+Number(segundoInput.value)
    })
}