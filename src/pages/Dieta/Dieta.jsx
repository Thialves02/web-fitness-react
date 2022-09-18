import React, { useContext, useEffect, useState } from 'react'
import Macro from '../../components/Macro/Macro'
import Title from '../../components/Title/Title'
import { MetasContainer, MetasMacros, MinhasMetas, Refeicoes } from './style'
import MetaCalorias from '../../components/MetaCalorias/MetaCalorias'
import Refeicao from '../../components/Refeicao/Refeicao'
import { Api } from '../../api/Api'
import { Context } from '../../context/CtxApp'

export default function Dieta() {
    const { altura, genero, idade, peso, nivelAtividade, objetivo } = useContext(Context)
    const [calculoCalorico, setCalculoCalorico] = useState(0)

    const [metaProteina, setMetaProteina] = useState(0)
    const [metaCarboidrato, setMetaCarboidrato] = useState(0)
    const [metaGordura, setMetaGordura] = useState(0)
    const [metaCaloria, setMetaCaloria] = useState(0)

    const refeicoesPadrao = ['refCafeManha', 'refAlmoço', 'refCafeTarde', 'refJantar']
    useEffect(() => {
        calculaGastoCalorico()
        var values = [{ 'nome': 't', 'carbo': 100, 'prot': 12, 'gord': 20, 'kcal': 230 },
        { 'nome': 'Teste', 'carbo': 100, 'prot': 12, 'gord': 20, 'kcal': 230 }]

        refeicoesPadrao.forEach(refeicaoPadrao => {
            localStorage.setItem(refeicaoPadrao, JSON.stringify(
                values
            ))
        })
    })

    const calculaGastoCalorico = () => {
        const alturaInt = Math.pow(altura)

        var pesoIdealMasc = (alturaInt * 21.5).toFixed(2)
        var pesoIdealFem = (alturaInt * 22.5).toFixed(2)

        const valorNivelAtividade = {
            "sedentario": 1.3,
            "levementeAtivo": 1.4,
            "ativoIniciante": 1.5,
            "ativoIntermediario": 1.6,
            "ativoAvancado": 1.7
        }

        //Verifica se o usuário está no peso ideal de acordo com o cálculo
        if (genero == "masculino") {
            if ((peso > pesoIdealMasc + 10) || (peso < pesoIdealMasc - 10)) {
                peso = pesoIdealMasc
            }
            setCalculoCalorico(valorNivelAtividade[nivelAtividade] * (66.47 + (13.75 * peso) + (5 * altura) - (6.8 * idade)))
        } else if (genero == "feminino") {
            if ((peso > pesoIdealFem + 10) || (peso < pesoIdealFem - 10)) {
                peso = pesoIdealFem
            }
            setCalculoCalorico(valorNivelAtividade[nivelAtividade] * (655.09 + (9.563 * peso) + (1.85 * altura) - (4.676 * idade)))
        }

        calculaMacros(peso, objetivo)
    }

    const calculaMacros = (peso, objetivo) => {
        const objetivoCaloria = {
            "perderPeso": -300,
            "ganharPeso": +300,
            "manterPeso": 0
        };

        const objetivoCarbo = {
            "perderPeso": 2.5,
            "ganharPeso": 5,
            "manterPeso": 3.5
        }

        setMetaCaloria((calculoCalorico + objetivoCaloria[objetivo]).toFixed(0))
        setMetaProteina(peso * 2)
        setMetaGordura(peso)
        setMetaCarboidrato(peso * objetivoCarbo[objetivo])
    }

    const refeicoesTotais = () => {
        var refeicoes = []
        const keys = Object.keys(localStorage);

        keys.forEach(key => {
            if (key.indexOf('ref') === 0) {
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
                        KcalTotal={metaCaloria}
                        KcalUsadas={2400}
                    />
                    <MetasMacros>
                        <Macro
                            label='carbo'
                            qntd={150}
                            total={metaCarboidrato}
                        />
                        <Macro
                            label='prot'
                            qntd={100}
                            total={metaProteina}
                        />
                        <Macro
                            label='gord'
                            qntd={60}
                            total={metaGordura}
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
