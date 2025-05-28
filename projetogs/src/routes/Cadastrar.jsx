import React, { useState } from 'react'
import Nav from '../components/Nav'
import Form from '../components/Formulario/Form'


const Cadastrar = () => {
  const [clientes, setClientes] = useState([])
  const aoNovoCliente = (cliente) =>{
    setClientes([...clientes, cliente])
    console.log(cliente)
    console.log(clientes)

  }
  
  return (
    <>
      <section className='w-full h-full flex flex-col justify-center items-center'>
        <Form aoClienteCadastrado={cliente => aoNovoCliente(cliente)}/>
      </section>
    </>

  )
}

export default Cadastrar