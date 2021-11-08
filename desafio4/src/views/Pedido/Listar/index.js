import axios from "axios"
import { api } from "../../../config"
import { Container, Table, Alert } from "reactstrap"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ListarPedido = (props) => {
    const [data, setData] = useState([])
    const [id, setId] = useState(props.match.params.id)
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })
    const getPedido = async () => {
        await axios.get(api + "/listapedidos").then((response) => {
            console.log(response.data.pedidos)
            setData(response.data.pedidos)
        }).catch(() => {
            setStatus({
                type: 'error',
                message: 'Sem conexão com a API'
            })
        })
    }
    useEffect(() => {
        getPedido()
    }, [id])
    return (
        <div>
            <Container>
            <div className='d-flex'>
                    <div>
                        <h1>Lista de Pedidos</h1>
                    </div>
                    <div className='m-auto p-2'>
                        <Link to='/cadastrarpedido' className='btn btn-outline-success btn-sm'>
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
                            <th>Pedido</th>
                            <th>Data do Pedido</th>
                            <th>Cliente</th>
                            <th>Detalhes do Pedido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.dataPedido}</td>
                                <td>{item.ClienteId}</td>
                                <td className='text-center/'>
                                    <Link to={'/listar-pedido/' + item.id}
                                        className='btn btn-outline-primary btn-sm'>
                                        Detalhes do Pedido
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