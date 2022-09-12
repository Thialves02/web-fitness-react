import React from 'react'
import { NavbarContainer } from './style'
import logo from '../../assets/images/logo.svg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Navbar() {
    var redirectCriarDieta
    const infoPessoal = localStorage.getItem('infoPessoal')
    infoPessoal ? redirectCriarDieta = '/dieta' : redirectCriarDieta = '/infoUsuario'
    return (
        <NavbarContainer>
            <Link to='/'><img src={logo} alt="WF" /></Link>
            <nav>
                <Link to='/'>Minha Evolução</Link>
                <Link to='/'>Treino Personalizado</Link>

                <Link to={redirectCriarDieta}>Criar Dieta</Link>
            </nav>
        </NavbarContainer>
    )
}
