import React from 'react'

export const CampoForm = (props) => {
    const aoDigitado = (e) =>{
        props.aoAlterado(e.target.value)
        console.log(e.target.value)
    }
  return (
    <>
    <label for="exampleInputEmail1" className="form-label">{props.nome.toUpperCase()}</label>
    <input onChange={aoDigitado} type={props.tipo} class="form-control" id={props.nome} aria-describedby={props.nome}></input>
    </>
  )
}
