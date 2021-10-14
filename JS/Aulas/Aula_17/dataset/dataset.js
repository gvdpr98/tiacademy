window.onload = function(){
    const btnBuscar = document.querySelector("#btn")
    const txtNomeCli = document.querySelector("#nomeCliente")
    btnBuscar.addEventListener('click',function(){
        let dataSetCliente = txtNomeCli.dataset.codigo
        console.log(dataSetCliente)
    })
}