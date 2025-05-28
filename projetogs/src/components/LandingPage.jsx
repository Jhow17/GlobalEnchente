import React from 'react'
import Home from '../routes/Home.jsx';
import Sobre from '../routes/Sobre.jsx';
import Solucao from '../routes/Solucao.jsx';
import Login from '../routes/Login.jsx';
import Error from '../routes/Error.jsx';


const LandingPage = () => {
  return (
    <div>

      <main className='container'>
        {/* cada um desses vai ser uma secao da landing page */}
        <Home />
        <Sobre />
        <Solucao />
        <Login />
      </main>
    </div>
  )
}

export default LandingPage