// let str = `Qualquer conteúdo!`
// let str2 = `Uma outra string ${str}`
// document.write(str2)


//Arrays

// const frutas = ["Uva","Banana","Laranja","Melancia"]
// let string = `Eu gosto de ${frutas[1]}`
// document.write(string+"<br>")
// for (let index = 0; index < 4; index++) {
//     document.write(frutas[index]+"<br>")
// }

const pessoa = [
    "José",
    23,
    "Solteiro",
    "Bola",
    1.70,
    cores = ["Azul","Preto","Verde"]  //array dentro de um array
]
document.write(pessoa[5][2])

for (let index = 0; index < pessoa.length; index++) {
    document.write(pessoa[index]+"<br>")
}