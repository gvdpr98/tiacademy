import axios from "axios"
import { api } from "../../../config"
import { Container, Table, Alert } from "reactstrap"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ListarServico = () => {
    const [data, setData] = useState([])
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })
    const getServicos = async () => {
        await axios.get(api + '/listaservicos').then((response) => {
            console.log(response.data.servicos)
            setData(response.data.servicos)
        }).catch(() => {
            setStatus({
                type: 'error',
                message: 'Sem conexão com a API'
            })
        })
    }
    useEffect(() => {
        getServicos()
    }, [])
    return (
        <div>
            <Container>
                <div className='d-flex'>
                    <div>
                        <h1>Lista de Serviços</h1>
                    </div>
                    <div className='m-auto p-2'>
                        <Link to='/cadastrarservico' className='btn btn-outline-success btn-sm'>
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
                                <th>{item.nome}</th>
                                <td>{item.descricao}</td>
                                <td className='text-center/'>
                                    <Link to={'/listar-pedido/' + item.id + '/servico'}
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