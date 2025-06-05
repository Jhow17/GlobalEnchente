import React from 'react'
import Carousel from '../components/Carousel'

const solucoes = [
  {
    titulo: "Alertas Inteligentes e Geolocalizados",
    conteudo: "Receba notificações de desastres naturais diretamente no seu celular, personalizadas para sua localização exata. Nossa plataforma envia alertas com mapas interativos e instruções visuais claras para evacuação, funcionando inclusive offline para garantir que você esteja sempre informado e seguro, mesmo em áreas com baixa conectividade."
  },
  {
    titulo: "Monitoramento Avançado com IA e Satélites",
    conteudo: "Utilizamos dados de satélites de observação da Terra (como CBERS e Sentinel) integrados a um robusto banco de dados georreferenciado. Algoritmos de Inteligência Artificial analisam essas informações continuamente para detectar e prever riscos de enchentes com maior precisão e antecedência, possibilitando uma resposta mais rápida e eficaz das autoridades e da população."
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
     <section className='bg-blue-50 py-16 lg:py-24 '  id='solucao'>

       <div className="text-center mb-10 md:mb-16 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
             Soluções 
        </h2>
         <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Veja como nossa tecnologia inovadora pode fazer a diferença na prevenção e resposta a enchentes.
        </p>
      </div>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center'> 
        <Carousel slides={solucoes}/>
      </div>
      </section>
  )
}

export default Solucao