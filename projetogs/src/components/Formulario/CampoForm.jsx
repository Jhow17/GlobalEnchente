import React from 'react'

export const CampoForm = (props) => {
    const aoDigitado = (e) =>{
        props.aoAlterado(e.target.value)
        console.log(e.target.value)
    }
    const inputId = props.nome.replace(/\s+/g, '-').toUpperCase()
  return (
    <>
    <label for={inputId} className="block text-sm font-medium text-gray-900 mb-1"><p>{props.nome.toUpperCase()}</p></label>
    <input onChange={aoDigitado} name={props.nome}  type={props.tipo} className="mt-1 mb-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm 
                           focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
                           sm:text-sm transition duration-150 ease-in-out" placeholder={props.placeholder || `Digite ${props.nome.toLowerCase()}...`} id={inputId} aria-describedby={props.nome}></input>
    </>
  )
}
