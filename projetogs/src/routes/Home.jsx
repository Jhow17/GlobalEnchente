import React from 'react'
import Nav from '../components/Nav'
import { FaWhatsapp } from "react-icons/fa";


const Home = () => {
  return (
     <section className='bg-indigo-500 text-white p-2 relative overflow-hidden ' id='home'>

      <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 '>
        <article className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
            <div className='space-y-6'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold leading-10'>Tecnologia que salva vidas</h1>
                <p className='lg:text-lg'>Ajudamos a previnir dessastres em enchentes usando tecnologia de cubesats alertando a populaçao</p>
                <div className='mt-8 flex'>
                <a className='text-white w-fit bg-green-500 px-3 py-2 rounded-md font-semibold flex items-center justify-center gap-2 !no-underline' href=""><FaWhatsapp className='w-5 h-5' />Contato via Whatsapp </a>
                </div>
            </div>
            <div className='hidden md:flex justify-center items-center h-80 relative'>
                <img src="public/Gemini_Generated_Image_ywqerkywqerkywqe.png" className="h-85" alt="imagem-banner"></img>
            </div>
      </article>

      </div>

      
     </section>
     
  )

}

export default Home