let msg = () => alert("JS")
// msg ()


function teste () {
    let nome = "Gabriel"
    return nome
}
// document.write(teste())


// (function() {
//     alert("BATATA")
// })()

let v1 = Number(prompt("Digite o valor 1"))
let v2 = Number(prompt("Digite o valor 2"))
const soma = (val1, val2)=> {
    let resultado = val1 + val2
    document.write(resultado)
}

soma(v1,v2)