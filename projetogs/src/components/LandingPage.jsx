import React from 'react'
import Home from '../routes/Home.jsx';
import Sobre from '../routes/Sobre.jsx';
import Solucao from '../routes/Solucao.jsx';
import Cadastrar from '../routes/Cadastrar.jsx';
import Footer from './Footer.jsx';
import Error from '../routes/Error.jsx';


const LandingPage = () => {
  return (
    <div>
      <main className='container-fluid p-0'>
        {/* cada um desses vai ser uma secao da landing page */}
        <Home />
        <Sobre />
        <Solucao />
        <Cadastrar/>
        <Footer/>
      </main>
    </div>
  )
}

export default LandingPage