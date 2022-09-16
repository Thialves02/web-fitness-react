import React, { useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "react-use"
const Context = createContext();

export default function CtxApp({ children }) {
    const [jwt, setJwt, jwtRemove] = useLocalStorage('JWT', null)
    return (
        <Context.Provider
            value={{ jwt, setJwt, jwtRemove }}
        >
            {children}
        </Context.Provider>
    );
}

export { Context, CtxApp };
