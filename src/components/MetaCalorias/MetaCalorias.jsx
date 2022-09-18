import React from 'react'
import { MetaKcalContainer } from './style'

export default function MetaCalorias({ KcalTotal, KcalUsadas }) {
    const porcentagemKcal = KcalUsadas * 100 / KcalTotal
    const KcalRestantes = KcalTotal - KcalUsadas

    const raioCirculo = 120
    var circumference = raioCirculo * 2 * Math.PI;
    function progressoKcal(percent) {
        return circumference - percent / 100 * circumference
    }

    return (
        <>
            <MetaKcalContainer>
                <h2>Meta {KcalTotal}kcal</h2>
                <div>
                    <svg
                        className="progress-ring"
                        width="260"
                        height="260">
                        <circle
                            strokeDasharray={`${circumference} ${circumference}`}
                            strokeDashoffset={progressoKcal(porcentagemKcal)}
                            className="progress-ring__circle"
                            stroke="white"
                            strokeWidth="10"
                            fill="transparent"
                            r={raioCirculo}
                            cx="130"
                            cy="130" />
                    </svg>
                    <h3>{KcalUsadas}kcal</h3>
                    <h3>{KcalRestantes}kcal restantes</h3>
                </div>
            </MetaKcalContainer>
        </>
    )
}
