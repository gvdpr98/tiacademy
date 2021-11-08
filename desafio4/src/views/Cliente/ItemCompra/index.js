import axios from "axios"
import { api } from "../../../config"
import { Container, Table, Alert } from "reactstrap"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const CompraCli = (props) => {
    const [data, setData] = useState([])
    const [id, setId] = useState(props.match.params.id)
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })
    const getItensCli = async () => {
        await axios.get(api + "/compras/" + id + "/clientes").then((response) => {
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
                    <h1>Compras do Cliente {id}</h1>
                </div>
                {status.type === 'error' ? <Alert color='danger'>
                    {status.message}
                </Alert> : ""}
            </Container>
            <Container>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Compra</th>
                            <th>Data da Compra</th>
                            <th>Detalhes da Compra</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.ClienteId}>
                                <th>{item.id}</th>
                                <td>{item.dataCompra}</td>
                                <td className='text-center/'>
                                    <Link to={'/listar-compra/' + item.id}
                                        className='btn btn-outline-primary btn-sm'>
                                        Detalhes da Compra
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