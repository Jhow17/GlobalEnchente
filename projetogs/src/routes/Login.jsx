import React, {  useState } from 'react'
import { CampoForm } from '../components/Formulario/CampoForm'
import { HashLink } from 'react-router-hash-link';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  return (
     <section className='min-h-screen  flex justify-center items-center' id='login'>
        <div className='p-4 max-w-3xl bg-indigo-100 rounded-lg flex'>
          <div className='md:w-1/2 px-8 bg-indigo-100 '>
            <h2>Sign in</h2>
            <form className='flex flex-col p-4 gap-2' action="">
              <CampoForm tipo='email' nome='E-Mail' valor={email} aoAlterado={valor => setEmail(valor)} />
              <CampoForm tipo='password' nome='Password' valor={senha} aoAlterado={valor => setSenha(valor)} />
                <div class="d-grid gap-2 p-4">
                    <button class="bg-indigo-700 p-2 rounded text-white font-semibold mt-8 hover:scale-105 duration-300" type="button">Button</button>
                </div>
            </form>
            <div className='mt-10 grid grid-cols-3 text-gray-900 items-center'>
              <hr className='border-gray-900' />
              <p className='text-center'>OR</p>
              <hr className='border-gray-900' />
            </div>
            <button className='flex justify-center items-center w-full bg-white border py-2 rounded mt-5 hover:scale-105 duration-300'><FcGoogle className='mx-2 w-10 h-7' /> Login with Google</button>
            
            <div className='mt-3 text-xs flex justify-between items-center'>
              <p className=''>Não tem Conta ?</p>
            <button className='hover:text-white rounded'> <HashLink 
  className="
    px-3 py-2                          
     text-black rounded-md text-base font-medium  duration-200 ease-in-out hover:text-white"smooth 
  to="/#cadastrar"> Cadastre-se</HashLink> </button>  
            </div>
          </div>
          
          <div className='md:block hidden w-1/2 min-h-full'>
            <img src="public/Gemini_Generated_Image_ywqerkywqerkywqe.png" className='rounded-2xl h-full' alt="imagem-login" />

          </div>
        </div>

     </section>
  )
}

export default Login