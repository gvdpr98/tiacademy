let dados = [prompt("Insira seu nome:"),Number(prompt("Insira seu peso:")),Number(prompt("Insira seu nome:"))]
let cabecario = ["Nome: ","Peso: ","Altura: "]
let unidade = ["."," kg"," m"]
let imc = dados[1]/(2*dados[2])
for (let index = 0; index < dados.length; index++) {
    document.write(cabecario[index]+dados[index]+unidade[index]+"<br>")
}
document.write("IMC: "+imc)
