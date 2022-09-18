import React, { useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "react-use"
const Context = createContext();

export default function CtxApp({ children }) {
    const [jwt, setJwt, jwtRemove] = useLocalStorage('JWT', null)
    const [id, setId, idRemove] = useLocalStorage('id', null)
    const [peso, setPeso] = useState('')
    const [idade, setIdade] = useState('')
    const [altura, setAltura] = useState('')
    const [nivelAtividade, setNivelAtividade] = useState('')
    const [objetivo, setObjetivo] = useState('')
    const [genero, setGenero] = useState('')
    const [nome, setNome] = useState('')

    return (
        <Context.Provider
            value={{
                jwt, setJwt, jwtRemove, id, setId, idRemove,
                peso, setPeso, idade, setIdade, altura, setAltura,
                nivelAtividade, setNivelAtividade, objetivo, setObjetivo,
                genero, setGenero, nome, setNome
            }}
        >
            {children}
        </Context.Provider>
    );
}

export { Context, CtxApp };
