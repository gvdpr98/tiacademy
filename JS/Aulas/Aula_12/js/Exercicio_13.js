let inverte = (invertido) => {
    for (let i=invertido.length-1;i>=0;i--) {
        document.write(invertido[i])
    }
}

inverte(prompt("Digite uma palavra:"))