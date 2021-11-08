import axios from "axios"
import { api } from "../../../config"
import { Container, Table, Alert } from "reactstrap"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ListarCliente = () => {
    const [data, setData] = useState([])
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })
    const getClientes = async () => {
        await axios.get(api + '/listaclientes').then((response) => {
            console.log(response.data.clientes)
            setData(response.data.clientes)
        }).catch(() => {
            setStatus({
                type: 'error',
                message: 'Sem conexão com a API'
            })
        })
    }
    useEffect(() => {
        getClientes()
    }, [])
    return (
        <div>
            <Container>
                <div className='d-flex'>
                    <div>
                        <h1>Lista de Clientes</h1>
                    </div>
                    <div className='m-auto p-2'>
                        <Link to='/cadastrarcliente' className='btn btn-outline-success btn-sm'>Cadastrar</Link>
                    </div>
                    {status.type === 'error' ? <Alert color='danger'>
                        {status.message}
                    </Alert> : ""}
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Data de Nascimento</th>
                            <th>Data de Cadastro</th>
                            <th>Pedidos</th>
                            <th>Compras</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <th>{item.nome}</th>
                                <td>{item.endereco}</td>
                                <td>{item.cidade}</td>
                                <td>{item.uf}</td>
                                <td>{item.nascimento}</td>
                                <td>{item.clienteDesde}</td>
                                <td className='text-center/'>
                                    <Link to={'/listar-pedido/' + item.id + '/cliente'}
                                        className='btn btn-outline-primary btn-sm'>
                                        Consultar Pedidos
                                    </Link>
                                </td>
                                <td className='text-center/'>
                                    <Link to={'/listar-compra/' + item.id + '/cliente'}
                                        className='btn btn-outline-primary btn-sm'>
                                        Consultar Compras
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container >
        </div >
    )
}