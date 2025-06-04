import React from 'react'
import Carousel from '../components/Carousel'

const solucoes = [
  {
    titulo: "Solução Inteligente 1",
    conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam."
  },
  {
    titulo: "Inovação e Tecnologia 2",
    conteudo: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    titulo: "Resultados Comprovados 3",
    conteudo: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    titulo: "Suporte Dedicado 4",
    conteudo: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

const Solucao = () => {
  return (
     <section className='bg-blue-50 py-16 lg:py-24'  id='solucao'>

      <div className='mx-auto px-16'> 
        <Carousel slides={solucoes}/>
      </div>
      </section>
  )
}

export default Solucao