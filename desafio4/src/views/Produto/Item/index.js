import axios from "axios"
import { api } from "../../../config"
import { Container, Table, Alert } from "reactstrap"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ItemProd = (props) => {
    const [data, setData] = useState([])
    const [id, setId] = useState(props.match.params.id)
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })
    const getItensPed = async () => {
        await axios.get(api + "/produtos/" + id + "/compras").then((response) => {
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
        getItensPed()
    }, [id])
    return (
        <div>
            <Container>
                <div>
                    <h1>Compras do Produto {id}</h1>
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
                            <tr key={item.ProdutoId}>
                                <th>{item.CompraId}</th>
                                <td>{item.quantidadeCompra}</td>
                                <td>{item.valorCompra}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}