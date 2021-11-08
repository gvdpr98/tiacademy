import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { api } from "../../../config"

export const CadastrarIpedido = () => {
    const [ipedido, setIpedido] = useState({
        ServicoId:'',
        PedidoId:'',
        quantidade:'',
        valor:''
    })
    const [status,setStatus] = useState({
        type:'',
        message:''
    })
    const valorInput = e => setIpedido({
        ...ipedido,[e.target.name]:e.target.value
    })

    const cadIpedido = async e =>{
        e.preventDefault()
        const headers = {
            'Content-Type':'application/json'
        }
        await axios.post(api+'/itempedidos',ipedido,{headers}).then((response)=>{
            if (response.data.error){
                setStatus({
                    type:'error',
                    message: response.data.message
                })
            } else{
                setStatus({
                    type:'success',
                    message: response.data.message
                })
            }
        }).catch(()=>{
            console.log('ERROR')
        })
    }
    return (
        <Container>
            <div className='d-flex'>
                <div className='m-auto p-2'>
                    <h1>Cadastrar Detalhes do Pedido</h1>
                </div>
                <div className='p-2'>
                    <Link to='/listar-pedido' className='btn btn-outline-success btn-sm'>
                        Pedidos
                    </Link>
                </div>
            </div>
            <hr className='m-1' />
            {status.type === 'error' ? <Alert color='danger'>{status.message}</Alert>:''}
            {status.type === 'success' ? <Alert color='success'>{status.message}</Alert>:''}
            <Form className='p-2' onSubmit={cadIpedido}>
                <FormGroup className='p-2'>
                    <Label>
                        ID do Serviço
                    </Label>
                    <Input
                        name="ServicoID"
                        placeholder="ID"
                        type="text"
                        onChange={valorInput}
                    />
                </FormGroup>
                <FormGroup className='p-2'>
                    <Label>
                        ID do Pedido
                    </Label>
                    <Input
                        name="PedidoID"
                        placeholder="ID"
                        type="text"
                        onChange={valorInput}
                    />
                </FormGroup>
                <FormGroup className='p-2'>
                    <Label>
                        Valor do Pedido
                    </Label>
                    <Input
                        name="valor"
                        placeholder="Valor"
                        type="text"
                        onChange={valorInput}
                    />
                </FormGroup>
                <FormGroup className='p-2'>
                    <Label>
                        Quantidade do Pedido
                    </Label>
                    <Input
                        name="quantidade"
                        placeholder="Quantidade"
                        type="text"
                        onChange={valorInput}
                    />
                </FormGroup>
                <Button type='submit' outline color='success'>
                    Cadastrar
                </Button>
            </Form>
        </Container>
    )

}