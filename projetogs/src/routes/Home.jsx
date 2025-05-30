import React from 'react'
import Nav from '../components/Nav'
import { FaInstagram } from "react-icons/fa";


const Home = () => {
  return (
     <section className='bg-indigo-500 text-white p-2 relative overflow-hidden ' id='home'>

      <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 '>
        <article className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
            <div className='space-y-6'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold leading-10 '>Tecnologia que salva vidas</h1>
                <p className='lg:text-lg max-w-120 leading-7 mt-5'>Utilizamos tecnologia de cubesats para monitorar riscos e alertar a população, prevenindo eficazmente os desastres causados por enchentes.</p>
                <div className='mt-8 flex'>
                <a className='text-white w-fit bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600" px-3 py-2 rounded-md font-semibold flex items-center justify-center gap-2 !no-underline' href=""><FaInstagram className='w-10 h-7' /> Instagram </a>
                </div>
            </div>
            <div className='hidden md:flex justify-center items-center h-80 relative'>
                <img src="public/Gemini_Generated_Image_ywqerkywqerkywqe.png" className="h-85 w-130 mb-3 rounded-2xl" alt="imagem-banner"></img>
            </div>
      </article>

      </div>

      
     </section>
     
  )

}

export default Home