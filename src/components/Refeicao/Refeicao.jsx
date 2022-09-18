import React from 'react'
import { useState } from 'react'
import Alimento from '../Alimento/Alimento'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { ButtonsContainer, MacrosContainer, RefeicaoContainer, RefeicaoInfos } from './style'

export default function Refeicao({ name }) {
    const [visivel, setVisivel] = useState('none')

    const nomeRefeicoes = {
        'refCafeManha': 'Café da Manhã',
        'refAlmoço': 'Almoço',
        'refCafeTarde': 'Cafe da Tarde',
        'refJantar': 'Jantar'
    }

    const nomeRefeicao = nomeRefeicoes[name]
    var prot = 0
    var carbo = 0
    var gord = 0
    var kcal = 0
    const calculaMacros = () => {
        const alimentos = JSON.parse(localStorage.getItem(name))
        /* console.log(alimentos) */
        alimentos.forEach(alimento => {
            console.log(alimento)
            prot += alimento.prot
            carbo += alimento.carbo
            gord += alimento.gord
            kcal += alimento.kcal
        })

        return { prot, carbo, gord, kcal }
    }
    /* const teste = calculaMacros() */
    const alimentos = JSON.parse(localStorage.getItem(name))

    const visibilidadeAlimento = () => {
        visivel === 'none' ? setVisivel('block') : setVisivel('none')
    }
    return (
        <RefeicaoContainer>
            <RefeicaoInfos onClick={visibilidadeAlimento}>
                <h2>{nomeRefeicao}</h2>
                <FontAwesomeIcon icon={faCaretDown} className={visivel} />
                <MacrosContainer>
                    <p>Carboidrato 999g</p>
                    <p>Proteína 999g</p>
                    <p>Gordura 999g</p>
                    <p>9999kcal</p>
                </MacrosContainer>
            </RefeicaoInfos>
            <div
                className={visivel}
            >
                {alimentos.map((alimento, index) =>
                    <Alimento
                        key={index}
                        nome={alimento.nome}
                        prot={alimento.prot}
                        carbo={alimento.carbo}
                        gord={alimento.gord}
                        kcal={alimento.kcal}
                        qntd={'100'}
                    />)}
            </div>
            <ButtonsContainer>
                <Button
                    type='button'
                    name='adcAlimento'
                    label='Adicionar Alimentos'
                    data={name}
                />
                <Button
                    type='button'
                    name='edtRefeicao'
                    label='Editar Refeicao'
                    data={name}
                />
            </ButtonsContainer>
        </RefeicaoContainer>
    )
}
