import React, { useContext, useEffect, useState } from 'react'
import { DropDownMenu, NavbarContainer } from './style'
import logo from '../../assets/images/logo.svg'
import {
    Link
} from "react-router-dom";
import { usuarioLogado } from '../../auth/auth';
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/CtxApp';
import { Api } from '../../api/Api';

export default function Navbar() {
    const { jwt, jwtRemove, id, idRemove, setAltura, setGenero, setIdade, setPeso, setNivelAtividade, setObjetivo, setNome, nome } = useContext(Context)
    const navigate = useNavigate()
    const [aberto, setAberto] = useState('fechado')

    useEffect(() => {
        usuarioLogado() && possuiInfoUsuario()
    }, [jwt, aberto]);

    const possuiInfoUsuario = async () => {
        const response = await Api.getById(`usuario`, id)
        const body = await response.json()

        setNome(body.nome)
        setAltura(body.altura)
        setPeso(body.peso)
        setIdade(body.idade)
        setGenero(body.genero)
        setObjetivo(body.objetivo)
        setNivelAtividade(body.nivelAtividade)
    }

    const dropDrownMenu = () => {
        aberto == 'fechado' ? setAberto('aberto') : setAberto('fechado')

        console.log(aberto)
    }

    const logout = () => {
        setAberto('fechado')
        jwtRemove()
        idRemove()
        setNome('')
        setAltura('')
        setPeso('')
        setIdade('')
        setGenero('')
        setObjetivo('')
        setNivelAtividade('')

        return jwt || id ? navigate('/') : alert('Erro ao fazer logout')
    }

    return (
        <NavbarContainer>
            <Link to='/'><img src={logo} alt="WF" /></Link>
            <nav>
                <Link to='/'>Minha Evolução</Link>
                <Link to='/'>Treino Personalizado</Link>
                <Link to='/dieta'>Criar Dieta</Link>

                {usuarioLogado() ? (
                    <p onClick={dropDrownMenu}>{nome}</p>
                ) : (
                    <Link to='/login'>Login</Link>
                )}
                <DropDownMenu
                    className={aberto}
                >
                    <Link to='/infoUsuario'>Informações Pessoais</Link>
                    <Link to='' onClick={logout}>Logout</Link>
                </DropDownMenu>
            </nav>
        </NavbarContainer>
    )
}
