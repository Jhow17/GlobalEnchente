import React from 'react';

const Sobre = () => {
  return (
    <section className='bg-blue-50 py-16 lg:py-24' id='sobre'> 
      <div className='container mx-auto px-4'> 

        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          
          
          <div className='relative'> 
            <div className='relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl'> 
              <img 
                className='w-full h-full object-cover hover:scale-105 duration-300 transition-transform ease-in-out' 
                src="/sobre_enchentes.png" 
                alt="Pessoas em área alagada após enchente" 
              />
            </div>
            <div className='absolute w-32 h-32 sm:w-40 sm:h-40 -right-4 -bottom-4 sm:right-2 sm:bottom-2 rounded-2xl border-4 border-white overflow-hidden shadow-lg'> 
              <img 
                className='w-full h-full object-cover hover:scale-105 duration-300 transition-transform ease-in-out' 
                src="/sobre2.png" 
                alt="Detalhe da enchente" 
              />
            </div>
          </div>

        
          <div className='space-y-6'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-800'> 
              Impacto das Enchentes
            </h2>
            <p className='text-gray-600 leading-relaxed'> 
              Esta imagem retrata um bairro de baixa renda após uma enchente severa. A devastação causada pelas enchentes na vida das pessoas é evidente, com casas danificadas e pertences espalhados pelas ruas. As pessoas caminham pela água turva, com os rostos marcados pela preocupação e exaustão, enquanto carregam o que conseguiram salvar de suas casas inundadas. Um jovem hispânico carrega um colchão encharcado nas costas enquanto caminha por uma rua cheia de escombros. A fotografia captura um sentimento de desespero, com foco no custo emocional e físico que as enchentes impõem às populações vulneráveis. A água lamacenta e os escombros refletem a intensidade do desastre. A foto foi concebida para retratar um sentimento de crise, transmitindo a destruição generalizada e o custo humano das enchentes.
            </p>
            <ul className='space-y-3 text-gray-600'>
              
              {['Impacto nas Moradias', 'Desafios de Saúde Pública', 'Perda de Pertences', 'Exemplo'].map(item => (
                <li key={item} className='flex items-center gap-3'>
                  <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20"> 
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className='pt-4'>
              <a 
                href="#mapa-modal" 
                className='bg-indigo-600 hover:bg-indigo-700 !no-underline text-white flex items-center justify-center w-fit gap-2 px-6 py-3 rounded-lg font-medium shadow-md transition-colors duration-150 ease-in-out'
              >
                Ver Mapa Meteorológico
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Sobre;