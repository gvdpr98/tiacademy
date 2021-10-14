let m = 10
// document.write(typeof m) // number



window.onload = function () {
    // alert ("Olá")
    const botone = document.getElementById('btn')
    const caixosa = document.querySelector("#caixa")
    botone.addEventListener('click',function () {
        botone.value = "Não me clique"
        caixosa.innerHTML = botone.value
    })
}