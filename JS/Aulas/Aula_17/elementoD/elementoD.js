window.onload = function(){
    let produtos = [
        {descricao:'Bolacha',preco:2.2},
        {descricao:'Marmelada',preco:5},
        {descricao:'Cup Noodles',preco:7.98}
    ]
    const listaProdutos = document.querySelector('#listaProdutos');
    (()=>{
        for (let pro of produtos){
            const filhoLi = document.createElement('li')
            for(listaP in pro){
                listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`
                console.log(`${pro[listaP]}`)
            }
        }
    })()
}