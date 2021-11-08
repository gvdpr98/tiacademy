import axios from "axios"
import { api } from "../../../config"
import { Container, Table, Alert } from "reactstrap"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ListarCompra = (props) => {
    const [data, setData] = useState([])
    const [id, setId] = useState(props.match.params.id)
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })
    const getPedido = async () => {
        await axios.get(api + "/listacompras").then((response) => {
            console.log(response.data.compras)
            setData(response.data.compras)
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
                        <h1>Lista de Compras</h1>
                    </div>
                    <div className='m-auto p-2'>
                        <Link to='/cadastrarcompra' className='btn btn-outline-success btn-sm'>
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
                            <th>Compra</th>
                            <th>Data da Compra</th>
                            <th>Cliente</th>
                            <th>Detalhes da Compra</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.dataCompra}</td>
                                <td>{item.ClienteId}</td>
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