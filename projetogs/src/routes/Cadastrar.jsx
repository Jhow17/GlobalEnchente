import React, { useState } from 'react'
import Nav from '../components/Nav'
import Form from '../components/Formulario/Form'
import { CampoForm } from '../components/Formulario/CampoForm'


const Cadastrar = () => {
  const [mensagem, setMensagem] = useState('')
  const aoDigitado = (e) => {
    setMensagem(e.target.value)

  }

  const [clientes, setClientes] = useState([])
  const aoNovoCliente = (cliente) =>{
    setClientes([...clientes, cliente])
    console.log(cliente)
    console.log(clientes)

  }
  
  return (
    <>
      <section id='cadastrar' className='h-auto w-full bg-gray-50 py-2 lg:py-20 flex flex-col items-center justify-center'>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Entre em Contato</h2>
        </div>
        <Form aoClienteCadastrado={cliente => aoNovoCliente(cliente)} textMsg={mensagem}>
          <div className="form-floating mt-4">
            <textarea value={mensagem} onChange={aoDigitado} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">Comments</label>
          </div>
        </Form>
      </section>
    </>

  )
}

export default Cadastrar