import React, { useState } from 'react'
import { CampoForm } from './CampoForm'
import Butao from './Butao'



const Form = (props) => {
    const [fnome, setFNome] = useState('')
    const [lnome, setLNome] = useState('')
    const [email, setEmail] = useState('')
    const aoSalvar = (e) =>{
        e.preventDefault()
        props.aoClienteCadastrado({
            fnome,
            lnome,
            email
        })
    }

  return (
    <>
        <form onSubmit={aoSalvar}>
            <div class="mb-3">
                <CampoForm tipo='text' nome='First Name' valor={fnome} aoAlterado={valor => setFNome(valor)} />
                <CampoForm tipo='text' nome='Last Name' valor={lnome} aoAlterado={ valor => setLNome(valor)} />
                <CampoForm tipo='email' nome='E-Mail' valor={email} aoAlterado={valor => setEmail(valor)} />
                <Butao nome='Cadastrar'/>
            </div>
            
        </form>
    </>

  )
}

export default Form