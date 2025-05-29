import React, { Children, useState } from 'react'
import { CampoForm } from './CampoForm'
import Butao from './Butao'



const Form = (props) => {
    const [fnome, setFNome] = useState('')
    const [lnome, setLNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const aoSalvar = (e) =>{
        e.preventDefault()
        props.aoClienteCadastrado({
            fnome,
            lnome,
            email,
            senha
        })
    }

  return (
    <>
        <form className="w-full  max-w-lg bg-white p-4 shadow-2x1 rounded-xl space-y-6" onSubmit={aoSalvar}>
                <CampoForm tipo='text' nome='First Name' valor={fnome} aoAlterado={valor => setFNome(valor)} />
                <CampoForm tipo='text' nome='Last Name' valor={lnome} aoAlterado={ valor => setLNome(valor)} />
                <CampoForm tipo='email' nome='E-Mail' valor={email} aoAlterado={valor => setEmail(valor)} />
                <CampoForm tipo='password' nome='Password' valor={senha} aoAlterado={valor => setSenha(valor)} />
                    {props.children}
                <div className='pt-4'>
                    <Butao nome='Cadastrar'/>
                </div>
                
        </form>
    </>

  )
}

export default Form