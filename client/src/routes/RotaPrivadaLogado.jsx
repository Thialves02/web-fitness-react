import React from 'react'
import {
    Outlet,
    Navigate
} from "react-router-dom";
import { usuarioLogado } from '../auth/auth';

export default function RotaPrivadaLogado() {
    return (
        usuarioLogado() ? <Navigate to='/' /> : <Outlet />
    )
}
