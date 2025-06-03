import React from 'react'
import Butao from './Formulario/Butao'

const Modal = ({isOpen, children, setModalOpen}) => {
    if (isOpen){
          return (
            <div className='fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4'>
                {/* quando se coloca md o estilo o estilo que esta sem nada fica para telas menores 768px */}
                <div className='bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-md text-center'>
                    {children}
                    <button onClick={setModalOpen} className='px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white '>Fechar</button>
                </div>         
            </div>
            
         )

    }
    return null

}

export default Modal