import React, { useEffect } from 'react'
import Macro from '../../components/Macro/Macro'
import Title from '../../components/Title/Title'
import { MetasContainer, MetasMacros, MinhasMetas, Refeicoes } from './style'
import MetaCalorias from '../../components/MetaCalorias/MetaCalorias'
import Refeicao from '../../components/Refeicao/Refeicao'


export default function Dieta() {
    const refeicoesPadrao = ['refCafeManha', 'refAlmoço', 'refCafeTarde', 'refJantar']
    useEffect(() => {
        var values = [{ 'nome': 't', 'carbo': 100, 'prot': 12, 'gord': 20, 'kcal': 230 },
        { 'nome': 'Teste', 'carbo': 100, 'prot': 12, 'gord': 20, 'kcal': 230 }]

        refeicoesPadrao.forEach(refeicaoPadrao => {
            localStorage.setItem(refeicaoPadrao, JSON.stringify(
                values
            ))
        })
    })

    const refeicoesTotais = () => {
        var refeicoes = []
        const keys = Object.keys(localStorage);

        keys.forEach(key => {
            if (key.indexOf('ref') == 0) {
                refeicoes.push(key)
            }
        })

        return refeicoes
    }

    const refeicoes = refeicoesTotais()

    return (
        <>
            <MinhasMetas>
                <Title
                    label='Minhas Metas'
                />
                <MetasContainer>
                    <MetaCalorias
                        KcalTotal={3000}
                        KcalUsadas={2400}
                    />
                    <MetasMacros>
                        <Macro
                            label='carbo'
                            qntd={150}
                            total={200}
                        />
                        <Macro
                            label='prot'
                            qntd={100}
                            total={170}
                        />
                        <Macro
                            label='gord'
                            qntd={60}
                            total={10}
                        />
                    </MetasMacros>
                </MetasContainer>
            </MinhasMetas>
            <Refeicoes>
                {refeicoes.map((refeicao, index) =>
                    <Refeicao
                        key={index}
                        name={refeicao}
                    />)}
            </Refeicoes>
        </>
    )
}
