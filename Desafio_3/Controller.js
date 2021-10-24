const express = require('express');
const cors = require('cors');

const {Sequelize} = require('./models')

const models = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let servico = models.Servico;
let pedido = models.Pedido;
let itempedido = models.ItemPedido;
let compra = models.Compra;
let produto = models.Produto;
let itemcompra = models.ItemCompra;

//CADASTROS

app.post('/servicos', async (req, res) => {
    await servico.create(
        req.body
    ).then(function(){
        return res.json({
            error : false,
            message : 'Serviço criado com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error : true,
            message : 'Erro de conexão!'
        })
    });
});

app.post('/compras', async (req, res) => {
    await compra.create(
        req.body
    ).then(function(){
        return res.json({
            error : false,
            message : 'Compra feita com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error : true,
            message : 'Erro de conexão!'
        })
    });
});

app.post('/clientes', async (req, res) => {
    await cliente.create(
        req.body
    ).then(function(){
        return res.json({
            error : false,
            message : 'Cliente cadastrado com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error : true,
            message : 'Erro de conexão!'
        })
    });
});

app.post('/pedidos', async (req, res) => {
    await pedido.create(
        req.body
    ).then(function(){
        return res.json({
            error : false,
            message : 'Pedido cadastrado com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error : true,
            message : 'Erro de conexão!'
        })
    });
});

app.post('/itempedidos', async (req, res) => {
    await itempedido.create(
        req.body
    ).then(function(){
        return res.json({
            error : false,
            message : 'Pedido cadastrado com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error : true,
            message : 'Erro de conexão!'
        })
    });
});

app.post('/itemcompras', async (req, res) => {
    await itemcompra.create(
        req.body
    ).then(function(){
        return res.json({
            error : false,
            message : 'Compra cadastrado com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error : true,
            message : 'Erro de conexão!'
        })
    });
});

app.post('/pedidos', async (req, res) => {
    await pedido.create(
        req.body
    ).then(function(){
        return res.json({
            error : false,
            message : 'Pedido cadastrado com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error : true,
            message : 'Erro de conexão!'
        })
    });
});

app.post('/produtos', async (req, res) => {
    await produto.create(
        req.body
    ).then(function(){
        return res.json({
            error : false,
            message : 'Produto cadastrado com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error : true,
            message : 'Erro de conexão!'
        })
    });
});

//LISTAS

app.get('/listaservicos',async(req, res)=>{
    await servico.findAll({
        order: [['id','ASC']]
    }).then(function(servicos){
        res.json({servicos})
    })
})

app.get('/listaprodutos',async(req, res)=>{
    await produto.findAll({
        order: [['id','ASC']]
    }).then(function(produtos){
        res.json({produtos})
    })
})

app.get('/listaclientes',async(req, res)=>{
    await cliente.findAll({
        order: [['id','ASC']]
    }).then(function(clientes){
        res.json({clientes})
    })
})

app.get('/listacompras',async(req, res)=>{
    await compra.findAll({
        order: [['id','ASC']]
    }).then(function(compras){
        res.json({compras})
    })
})

app.get('/listapedidos',async(req, res)=>{
    await pedido.findAll({
        order: [['id','ASC']]
    }).then(function(pedidos){
        res.json({pedidos})
    })
})

//BUSCA POR ID

app.get('/clientes/:id', async(req,res)=>{
    await cliente.findByPk(req.params.id).then(cli =>{
        return res.json({
            error: false,
            cli
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: Conexão não suscedida!!!"
        })
    })
})

app.get('/servicos/:id', async(req,res)=>{
    await servico.findByPk(req.params.id).then(serv =>{
        return res.json({
            error: false,
            serv
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: Conexão não suscedida!!!"
        })
    })
})

app.get('/produtos/:id', async(req,res)=>{
    await produto.findByPk(req.params.id).then(prod =>{
        return res.json({
            error: false,
            prod
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: Conexão não suscedida!!!"
        })
    })
})

app.get('/pedidos/:id', async(req,res)=>{
    await pedido.findByPk(req.params.id).then(ped =>{
        return res.json({
            error: false,
            ped
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: Conexão não suscedida!!!"
        })
    })
})

app.get('/compras/:id', async(req,res)=>{
    await compra.findByPk(req.params.id).then(com =>{
        return res.json({
            error: false,
            com
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: Conexão não suscedida!!!"
        })
    })
})

app.get('/itempedidos/:id', async(req,res)=>{
    await itempedido.findByPk(req.params.id).then(iped =>{
        return res.json({
            error: false,
            iped
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: Conexão não suscedida!!!"
        })
    })
})

app.get('/itemcompras/:id', async(req,res)=>{
    await itemcompra.findByPk(req.params.id).then(icom =>{
        return res.json({
            error: false,
            icom
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: Conexão não suscedida!!!"
        })
    })
})

//EDIÇÂO DE ITENS

app.put('./pedidos/:id/editaritem', async(req,res)=>{
    const item ={
        quantidade: req.body.quantidade,
        valor: req.body.valor
    }
    if (!await pedido.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Pedido não encontrado!'
        })
    }
    if (!await servico.findByPk(req.body.ServicoId)){
        return res.status(400).json({
            error: true,
            message: 'Serviço não encontrado!'
        })
    }
    await itempedido.update(item, {
        where: Sequelize.and({ServicoId: req.body.ServicoId},
            {PedidoId: req.params.id})
    }).then(function(itens){
        return res.json({
            error: false,
            message: 'Pedido alterado com sucesso!',
            itens
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Não foi possível realizar a alteração!!'
        })
    })
})

app.put('./compras/:id/editaritem', async(req,res)=>{
    const item ={
        quantidade: req.body.quantidade,
        valor: req.body.valor
    }
    if (!await compra.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Compra não encontrado!'
        })
    }
    if (!await produto.findByPk(req.body.ProdutoId)){
        return res.status(400).json({
            error: true,
            message: 'Serviço não encontrado!'
        })
    }
    await itemcompra.update(item, {
        where: Sequelize.and({ProdutoId: req.body.ProdutoId},
            {CompraId: req.params.id})
    }).then(function(itens){
        return res.json({
            error: false,
            message: 'Pedido alterado com sucesso!',
            itens
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Não foi possível realizar a alteração!!'
        })
    })
})

//ATUALIZAÇÃO DE CADASTRO

app.put('/atualizacliente', async(req,res)=>{
    await cliente.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: 'Serviço alterado com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Erro na alteração do serviço'
        })
    })
})

app.put('/atualizaservico', async(req,res)=>{
    await servico.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: 'Serviço alterado com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Erro na alteração do serviço'
        })
    })
})

app.put('/atualizaproduto', async(req,res)=>{
    await produto.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: 'Serviço alterado com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Erro na alteração do serviço'
        })
    })
})

app.put('/atualizapedido', async(req,res)=>{
    await pedido.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: 'Serviço alterado com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Erro na alteração do serviço'
        })
    })
})

app.put('/atualizacompra', async(req,res)=>{
    await compra.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: 'Serviço alterado com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Erro na alteração do serviço'
        })
    })
})

//EXCLUSÃO DE CADASTRO

app.get('/excluircliente/:id', async(req,res)=>{
    await cliente.destroy({
        where: {id:req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: 'Cliente excluído com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Erro na exclusão do cliente'
        })
    })
})

app.get('/excluirservico/:id', async(req,res)=>{
    await servico.destroy({
        where: {id:req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: 'Serviço excluído com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Erro na exclusão do serviço'
        })
    })
})

app.get('/excluirproduto/:id', async(req, res)=>{
    await produto.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
          error: false,
          message: 'Produto excluido com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
          error: true,
          message: 'Erro ao excluir o produto'
        })
    })
})

app.get('/excluirpedido/:id', async(req,res)=>{
    await (pedido.destroy({
        where: {id:req.params.id}
    }), itempedido.destroy({
        where: {PedidoId:req.params.id}
    })).then(function(){
        return res.json({
            error: false,
            message: 'Pedido excluído com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Erro na exclusão do pedido'
        })
    })
})

app.get('/excluircompra/:id', async(req,res)=>{
    await (compra.destroy({
        where: {id:req.params.id}
    }), itemcompra.destroy({
        where: {CompraId:req.params.id}
    })).then(function(){
        return res.json({
            error: false,
            message: 'Compra excluída com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Erro na exclusão da compra'
        })
    })
})

let port = process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo: http://localhost:3001')
});