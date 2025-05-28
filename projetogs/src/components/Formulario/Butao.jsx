import React from 'react'

const Butao = (props) => {
  return (
    <div className="d-grid gap-2 m-5 w-1/4 "><button type="submit" className="btn btn-success">{props.nome}</button></div>
  )
}

export default Butao