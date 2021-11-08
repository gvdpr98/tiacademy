import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from './views/Home'
import {ListarCliente} from './views/Cliente/Listar'
import {ListarPedido} from './views/Pedido/Listar'
import {ListarServico} from './views/Servico/Listar'
import {ListarCompra} from './views/Compra/Listar'
import {ListarProduto} from './views/Produto/Listar'
import {Menu} from './components/Menu'
import {Item} from './views/Servico/Item'
import {ItemPedCli} from './views/Pedido/Item'
import {ItemCli} from './views/Cliente/ItemPedido'
import {ItemProd} from './views/Produto/Item'
import {CompraCli} from './views/Cliente/ItemCompra'
import {ItemComCli} from './views/Compra/Item'
import {CadastrarCliente} from './views/Cliente/Cadastrar'
import { CadastrarCompra } from './views/Compra/Cadastrar';
import { CadastrarServico } from './views/Servico/Cadastrar';
import { CadastrarProduto } from './views/Produto/Cadastrar';
import { CadastrarIcompra } from './views/Compra/ItemCompra';
import { CadastrarPedido } from './views/Pedido/Cadastrar';
import { CadastrarIpedido } from './views/Pedido/ItemPedido';

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/listar-cliente' component={ListarCliente}/>
          <Route exact path='/listar-pedido' component={ListarPedido}/>
          <Route exact path='/listar-servico' component={ListarServico}/>
          <Route exact path='/listar-compra' component={ListarCompra}/>
          <Route exact path='/listar-produto' component={ListarProduto}/>
          <Route exact path='/listar-pedido/:id/servico' component={Item}/>
          <Route exact path='/listar-pedido/:id' component={ItemPedCli}/>
          <Route exact path='/listar-pedido/:id/cliente' component={ItemCli}/>
          <Route exact path='/listar-compra/:id/produto' component={ItemProd}/>
          <Route exact path='/listar-compra/:id/cliente' component={CompraCli}/>
          <Route exact path='/listar-compra/:id/' component={ItemComCli}/>
          <Route exact path='/cadastrarcliente' component={CadastrarCliente}/>
          <Route exact path='/cadastrarcompra' component={CadastrarCompra}/>
          <Route exact path='/cadastrar-itemcompra' component={CadastrarIcompra}/>
          <Route exact path='/cadastrarservico' component={CadastrarServico}/>
          <Route exact path='/cadastrarproduto' component={CadastrarProduto}/>
          <Route exact path='/cadastrarpedido' component={CadastrarPedido}/>
          <Route exact path='/cadastrar-itempedido' component={CadastrarIpedido}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
