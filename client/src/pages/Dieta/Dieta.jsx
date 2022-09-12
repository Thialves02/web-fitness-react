import React from 'react'
import Macro from '../../components/Macro/Macro'
import Title from '../../components/Title/Title'
import { MetasContainer, MetasMacros, MinhasMetas } from './style'
import MetaCalorias from '../../components/MetaCalorias/MetaCalorias'


export default function Dieta() {
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
        </>
    )
}
