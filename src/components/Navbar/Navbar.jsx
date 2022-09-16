import React, { useContext, useEffect } from 'react'
import { NavbarContainer } from './style'
import logo from '../../assets/images/logo.svg'
import {
    Link
} from "react-router-dom";
import { usuarioLogado } from '../../auth/auth';
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/CtxApp';

export default function Navbar() {
    const { jwt, jwtRemove } = useContext(Context)

    useEffect(() => {

    }, [jwt]);

    let navigate = useNavigate()
    const logout = () => {
        jwtRemove()
        return jwt ? navigate('/') : alert('Erro ao fazer logout')
    }

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
                {usuarioLogado() ? (
                    <Link to='' onClick={logout}>Logout</Link>
                ) : (
                    <Link to='/login'>Login</Link>
                )}
            </nav>
        </NavbarContainer>
    )
}
