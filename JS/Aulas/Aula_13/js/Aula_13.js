//for in -> Objetos
document.write("for in: <br>")
let Pessoas = {
    nome:"Steve Rogers",
    idade: 90,
    apelido:"Capitão América",
    rival:"Red Skull",
    condição:"Desaparecido"
}

for (let key in Pessoas) {
    document.write(key+": "+Pessoas[key]+"<br>")
}

document.write("<br>")
document.write("for of: <br>")

//for of -> Arrays
let avengers = ["Homem de Ferro","Capitão América","Gavião Arqueiro","Viúva Negra","Hulk","Thor"]

for (let i of avengers) {
    document.write(i+"<br>")
}