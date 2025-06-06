import React from 'react'
import Carousel from '../components/Carousel'

const solucoes = [
  {
    titulo: "Alertas Inteligentes e Geolocalizados",
    conteudo: "Receba notificações de desastres naturais diretamente no seu celular, personalizadas para sua localização exata. Nossa plataforma envia alertas com mapas interativos e instruções visuais claras para evacuação, funcionando inclusive offline para garantir que você esteja sempre informado e seguro, mesmo em áreas com baixa conectividade."
  },
  {
    titulo: "Monitoramento Avançado com IA e Satélites",
    conteudo: "Utilizamos dados de cube satélites de observação da Terra integrados a um robusto banco de dados georreferenciado. Algoritmos de Inteligência Artificial analisam essas informações continuamente para detectar e prever riscos de enchentes com maior precisão e antecedência, possibilitando uma resposta mais rápida e eficaz das autoridades e da população."
  },
  {
    titulo: "Comunidade Conectada e Engajada", // Título levemente ajustado
    conteudo: "Fortaleça a resiliência da sua comunidade! Nosso aplicativo móvel, com suporte offline, permite que cidadãos e ONGs contribuam ativamente com informações de campo, como o envio de fotos e vídeos georreferenciados de áreas de risco ou alagadas. Os alertas oficiais são disseminados por múltiplos canais, incluindo WhatsApp, SMS e rádios comunitárias, garantindo ampla cobertura e que todos recebam as informações cruciais a tempo."
  },
  {
    titulo: "Gestão de Crises Otimizada para Autoridades",
    conteudo: "Empoderamos a Defesa Civil e gestores públicos com um painel de controle web intuitivo. Essa ferramenta permite o envio manual de alertas geolocalizados, o monitoramento em tempo real da situação e o acesso a relatórios, otimizando a tomada de decisões estratégicas. O objetivo é reduzir significativamente o tempo de evacuação e, consequentemente, minimizar perdas humanas e danos materiais."
  }
];

const Solucao = () => {
  return (
     <section className='bg-indigo-50 py-16 lg:py-24 '  id='solucao'>

       <div className="text-left mb-10 md:mb-16 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center">
             Nosso Projeto 
        </h2>
         <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Veja como nossa solução inovadora pode fazer a diferença na resposta a enchentes.
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          <div className='relative'>
            <div className='relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl'>
              <img className='w-full h-full object-containt-scale-100  ease-in-out' src="public/Screenshot_20250606_190641_ReadEra[1].jpg" alt="" />
            </div>
          </div>
          <div className='relative'>
            <div className='relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl'>
              <iframe className='w-full h-full object-containt-scale-100  ease-in-out' width="560" height="315" src="https://www.youtube.com/embed/1C-BN0NHP_A?si=NGlraQRUYdvGf2N7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center'> 
        <Carousel slides={solucoes}/>
      </div>

      </section>
  )
}

export default Solucao