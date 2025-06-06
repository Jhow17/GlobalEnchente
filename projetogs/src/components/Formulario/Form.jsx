import React, {  useState } from 'react'
import { CampoForm } from './CampoForm'
import Butao from './Butao'




const Form = (props ) => {
    const [fnome, setFNome] = useState('')
    const [lnome, setLNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erros,setErros] = useState({})
    
    const aoSalvar = (e) =>{
        e.preventDefault()
        const Erros = { }
        if(!fnome.trim()) Erros.fnome = "O nome é obrigatorio"
        if(!email.trim()) Erros.email = "O E-mail é obrigatorio"
        
        setErros(Erros)
        if (Object.keys(Erros).length > 0 ){
            return 
        }

        props.aoClienteCadastrado(
            {fnome,
            lnome,
            email,
            senha,
            mensagem : props.textMsg})
        setFNome('');
        setLNome('');
        setEmail('');
        setSenha('');
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