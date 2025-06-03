import React from 'react'
import { HashLink } from 'react-router-hash-link'; 
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar-dark navbar-expand-lg bg-gray-900">
        <div className="container-fluid ">
                <HashLink className="navbar-brand  text-white" smooth to="/#home">
                    <img src="./public/satelite-de-sinal.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                        Alerta Enchentes
                </HashLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                ><span className="navbar-toggler-icon"></span></button>
                <div className="navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav lg:mx-auto ms-lg-auto mb-2 mb-lg-0">
                        <li className="nav-item text-lg lg:mr-3">
                            <HashLink className="nav-link  text-white" smooth to="/#home" > Home</HashLink>
                        </li>
                        <li className="nav-item mr-5 text-lg">
                            <HashLink className="nav-link  text-white" smooth to="/#sobre">Sobre</HashLink>
                        </li>
                        <li className="nav-item mr-5 text-lg">
                            <HashLink className="nav-link  text-white" smooth to="/#solucao">Solução</HashLink>
                        </li>
                        <li className="nav-item mr-5 text-lg">
                            <HashLink className="nav-link  text-white" smooth to="/#cadastrar">Cadastrar</HashLink>
                        </li>
                        <li className="navbar-brand  text-white">
                            <Link className="nav-link text-3xl text-white" to="/login">Login</Link>
                        </li>
                 </ul>
            </div>
        </div>
    </nav>
  )
}





export default Nav