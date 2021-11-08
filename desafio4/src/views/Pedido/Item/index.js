import axios from "axios"
import { api } from "../../../config"
import { Container, Table, Alert } from "reactstrap"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ItemPedCli = (props) => {
    const [data, setData] = useState([])
    const [id, setId] = useState(props.match.params.id)
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })
    const getItemPC = async () => {
        await axios.get(api + "/pedidos/" + id + "/clientes").then((response) => {
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
        getItemPC()
    }, [id])
    return (
        <div>
            <Container>
                <div>
                    <h1>Detalhes do Pedido {id}</h1>
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
                            <th>Quantidade</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.ServicoId}>
                                <th>{item.PedidoId}</th>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}