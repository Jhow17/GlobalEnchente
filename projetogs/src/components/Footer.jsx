import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-gray-900 text-gray-300'>
            <div className='container mx-auto px-6 pt-12 pb-8'>
      
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
                    
            
                    <div className='space-y-3'>
                        <h3 className='text-xl font-bold text-white'>Guardião das Águas</h3>
                        <p className='text-sm text-gray-400'>
                            Tecnologia a serviço da vida, prevenindo desastres naturais com alertas inteligentes e monitoramento preciso.
                        </p>
                    </div>

            
                    <div>
                        <h4 className='text-lg font-semibold text-white uppercase tracking-wider'>Navegação</h4>
                        <ul className='mt-4 space-y-2'>
                            <li>
                                <HashLink smooth to="/#sobre" className="hover:text-white transition-colors duration-200">Sobre</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#solucao" className="hover:text-white transition-colors duration-200">Soluções</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#cadastrar" className="hover:text-white transition-colors duration-200">Contato</HashLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='text-lg font-semibold text-white uppercase tracking-wider'>Legal</h4>
                        <ul className='mt-4 space-y-2'>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Política de Privacidade</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Termos de Serviço</a></li>
                        </ul>
                    </div>

                
                    <div>
                        <h4 className='text-lg font-semibold text-white uppercase tracking-wider'>Siga-nos</h4>
                        <div className='flex mt-4 space-x-4'>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Instagram"><FaInstagram  size={20} />Instagram</a>
                        </div>
                    </div>

                </div>

                
                <div className='mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-500'>
                    <p>&copy; {currentYear} Guardião das Águas. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;