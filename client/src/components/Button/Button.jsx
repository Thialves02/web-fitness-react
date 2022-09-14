import React from 'react'
import { ButtonStyled } from './style'


export default function Button({ label, name, type, data }) {
    return (
        <ButtonStyled type={type} data-js={data} name={name}>{label}</ButtonStyled>
    )
}
