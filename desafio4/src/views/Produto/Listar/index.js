import axios from "axios"
import { api } from "../../../config"
import { Container, Table, Alert } from "reactstrap"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ListarProduto = () => {
    const [data, setData] = useState([])
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })
    const getProdutos = async () => {
        await axios.get(api + '/listaprodutos').then((response) => {
            console.log(response.data.produtos)
            setData(response.data.produtos)
        }).catch(() => {
            setStatus({
                type: 'error',
                message: 'Sem conexão com a API'
            })
        })
    }
    useEffect(() => {
        getProdutos()
    }, [])
    return (
        <div>
            <Container>
            <div className='d-flex'>
                    <div>
                        <h1>Lista de Produtos</h1>
                    </div>
                    <div className='m-auto p-2'>
                        <Link to='/cadastrarproduto' className='btn btn-outline-success btn-sm'>
                            Cadastrar
                        </Link>
                    </div>
                    {status.type === 'error' ? <Alert color='danger'>
                        {status.message}
                    </Alert> : ""}
                </div>
            </Container>
            <Container>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <th>{item.nomeProduto}</th>
                                <td>{item.descricaoProduto}</td>
                                <td className='text-center/'>
                                    <Link to={'/listar-compra/' + item.id + '/produto'}
                                        className='btn btn-outline-primary btn-sm'>
                                        Consultar
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}