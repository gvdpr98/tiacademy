import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { api } from "../../../config"

export const CadastrarIcompra = () => {
    const [icompra, setIcompra] = useState({
        ProdutoId:'',
        CompraId:'',
        quantidadeCompra:'',
        valorCompra:''
    })
    const [status,setStatus] = useState({
        type:'',
        message:''
    })
    const valorInput = e => setIcompra({
        ...icompra,[e.target.name]:e.target.value
    })

    const cadIcompra = async e =>{
        e.preventDefault()
        const headers = {
            'Content-Type':'application/json'
        }
        await axios.post(api+'/itemcompras',icompra,{headers}).then((response)=>{
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
                    <h1>Cadastrar Detalhes da Compra</h1>
                </div>
                <div className='p-2'>
                    <Link to='/listar-compra' className='btn btn-outline-success btn-sm'>
                        Compras
                    </Link>
                </div>
            </div>
            <hr className='m-1' />
            {status.type === 'error' ? <Alert color='danger'>{status.message}</Alert>:''}
            {status.type === 'success' ? <Alert color='success'>{status.message}</Alert>:''}
            <Form className='p-2' onSubmit={cadIcompra}>
                <FormGroup className='p-2'>
                    <Label>
                        ID do Produto
                    </Label>
                    <Input
                        name="ProdutoID"
                        placeholder="ID"
                        type="text"
                        onChange={valorInput}
                    />
                </FormGroup>
                <FormGroup className='p-2'>
                    <Label>
                        ID da Compra
                    </Label>
                    <Input
                        name="CompraID"
                        placeholder="ID"
                        type="text"
                        onChange={valorInput}
                    />
                </FormGroup>
                <FormGroup className='p-2'>
                    <Label>
                        Valor da Compra
                    </Label>
                    <Input
                        name="valorCompra"
                        placeholder="Valor"
                        type="text"
                        onChange={valorInput}
                    />
                </FormGroup>
                <FormGroup className='p-2'>
                    <Label>
                        Quantidade da Compra
                    </Label>
                    <Input
                        name="quantidadeCompra"
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