import React, { useState } from "react";
import { createContext } from "react";

const Context = createContext();

export default function CtxApp({ children }) {
    return (
        <Context.Provider
            value={{}}
        >
            {children}
        </Context.Provider>
    );
}

export { Context, CtxApp };
