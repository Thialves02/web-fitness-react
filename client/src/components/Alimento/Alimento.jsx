import React from 'react'
import { MacrosLabel } from '../Macro/style'
/* import { MacrosContainer } from '../Refeicao/style' */
import { AlimentoContainer, AlimentoInfo, MacrosContainer } from './style'

export default function Alimento({ nome, prot, carbo, gord, kcal, qntd }) {
    return (
        <AlimentoContainer>
            <AlimentoInfo>
                <p>{nome}</p>
                <p>{kcal}Kcal</p>
            </AlimentoInfo>
            <AlimentoInfo>
                <p>{qntd}g</p>
                <MacrosContainer>
                    <p>Carboidrato {carbo}g</p>
                    <p>Proteína {prot}g</p>
                    <p>Gordura {gord}g</p>
                </MacrosContainer>
            </AlimentoInfo>
        </AlimentoContainer>
    )
}
