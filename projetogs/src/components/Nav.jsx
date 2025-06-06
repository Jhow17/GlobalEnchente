import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { CiLogin } from "react-icons/ci"; // Ícone para Login
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones para o menu hambúrguer

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="flex items-center justify-between h-20"> 
          
    
          <HashLink 
            className="text-2xl text-white sm:text-3xl font-bold flex items-center no-underline hover:text-gray-300" 
            smooth 
            to="/#home"
            onClick={closeMobileMenu} 
          >
            <img 
              src="/satelite-de-sinal.png" 
              alt="Logo Alerta Enchentes" 
              width="30" 
              height="24" 
              className="mr-2"
            />
            Guardião das Águas

          </HashLink>


          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Alterna ícone */}
            </button>
          </div>


          <div className="hidden lg:flex lg:items-center lg:space-x-4 text-white"> {/* Escondido em mobile, flex em LG */}
            <HashLink className="px-3 text-white py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors" smooth to="/#home">Home</HashLink>
            <HashLink className="px-3 text-white py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors" smooth to="/#sobre">Sobre</HashLink>
            <HashLink className="px-3 text-white py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors" smooth to="/#solucao">Solução</HashLink>
            <HashLink className="px-3 text-white py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors" smooth to="/#cadastrar">Cadastrar</HashLink>
            <Link className="flex items-center text-white gap-1 px-3 py-2 rounded-md font-bold text-2xl  hover:bg-gray-700 transition-colors" to="/login">
              Login <CiLogin className='w-5 h-5' />
            </Link>
          </div>
        </div>
      </div>

      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute w-full bg-gray-900 shadow-lg z-20`}>
        <ul className="flex flex-col items-center py-4 space-y-2">
          <li>
            <HashLink className="block px-3 text-white py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors" smooth to="/#home" onClick={closeMobileMenu}>Home</HashLink>
          </li>
          <li>
            <HashLink className="block px-3 text-white py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors" smooth to="/#sobre" onClick={closeMobileMenu}>Sobre</HashLink>
          </li>
          <li>
            <HashLink className="block px-3 text-white py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors" smooth to="/#solucao" onClick={closeMobileMenu}>Solução</HashLink>
          </li>
          <li>
            <HashLink className="block px-3 text-white py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors" smooth to="/#cadastrar" onClick={closeMobileMenu}>Cadastrar</HashLink>
          </li>
          <li>
            <Link className="flex items-center text-white gap-1 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors" to="/login" onClick={closeMobileMenu}>
              Login <CiLogin className='w-5 h-5' />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;