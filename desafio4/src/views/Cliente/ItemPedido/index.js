import axios from "axios"
import { api } from "../../../config"
import { Container, Table, Alert } from "reactstrap"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ItemCli = (props) => {
    const [data, setData] = useState([])
    const [id, setId] = useState(props.match.params.id)
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })
    const getItensCli = async () => {
        await axios.get(api + "/clientes/" + id + "/pedidos").then((response) => {
            console.log(response.data.item)
            setData(response.data.item)
        }).catch(() => {
            setStatus({
                type: 'error',
                message: 'Sem conexão com a API'
            })
        })
    }
    useEffect(() => {
        getItensCli()
    }, [id])
    return (
        <div>
            <Container>
                <div>
                    <h1>Pedidos do Cliente {id}</h1>
                </div>
                {status.type === 'error' ? <Alert color='danger'>
                    {status.message}
                </Alert> : ""}
            </Container>
            <Container>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Pedido</th>
                            <th>Data do Pedido</th>
                            <th>Detalhes do Pedido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.ClienteId}>
                                <th>{item.id}</th>
                                <td>{item.dataPedido}</td>
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