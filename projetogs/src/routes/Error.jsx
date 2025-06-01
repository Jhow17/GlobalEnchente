import React from 'react'
import { ImSad } from "react-icons/im";

const Error = () => {
  return (
    <div className='h-screen d-flex justify-center items-center flex-col'>
      <ImSad className='mb-10 h-50 w-50' />
      <h1> 404 Page Not Found</h1>
      <p>A página que você esta procurando não existe ou aconteceu outro erro.</p>
    </div>
  )
}

export default Error