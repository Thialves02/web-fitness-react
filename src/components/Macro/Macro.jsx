import React from 'react'
import { Macros, MacrosLabel, MacrosQntd, MacrosTotais } from './style'

export default function Macro({ label, qntd, total }) {
    const nomeMacros = {
        'carbo': 'Carboidratos',
        'prot': 'Proteína',
        'gord': 'Gordura'
    }
    const nomeMacro = nomeMacros[label]

    return (
        <>
            <Macros>
                <MacrosLabel>
                    <label>{nomeMacro}</label>
                    <label>{`(${qntd}g/${total}g)`}</label>
                </MacrosLabel>
                <MacrosTotais>
                    <MacrosQntd
                        qntd={qntd}
                        className={label}
                    />
                </MacrosTotais>
            </Macros>
        </>
    )
}
