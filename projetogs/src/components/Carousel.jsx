import React, { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Carousel = ({slides}) => {
    let [current, setCurrent] = useState(0)

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1)
        else setCurrent(current - 1)
}
    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0)
        else setCurrent(current + 1)
}
  return (

    <div className='overflow-hidden relative w-full md:w-11/12 lg:w-3/4 xl:w-2/3 mx-auto rounded-lg shadow-xl'>
        <div className={`flex transition ease-out duration-800`}
        style={{transform: `translateX(-${current * 100}%)`}}>
            {slides.map((s, i) => {
                return <div key={i} className='w-full flex-shrink-0 px-16 py-2 bg-indigo-800 text-white rounded-md min-h-[200px] flex flex-col justify-center items-center text-left'>
                    <h4 className='text-3xl font-bold sm:text-4xl mb-10'>{s.titulo}</h4>
                    <hr className='text-white' />
                    <p className='text-base leading-relaxed'>{s.conteudo}</p>
                </div>
            })}
        </div>
        <div className='absolute inset-0 flex justify-between items-center p-4 text-white text-3xl'>
            <button onClick={previousSlide}>
                <FaChevronLeft/>
            </button>
            <button onClick={nextSlide}>
                <FaChevronRight />
            </button>
        </div>
    </div>
  )
}

export default Carousel