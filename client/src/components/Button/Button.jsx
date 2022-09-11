import React from 'react'
import { ButtonStyled } from './style'


export default function Button({ label, name, type }) {
    return (
        <ButtonStyled type={type} name={name}>{label}</ButtonStyled>
    )
}
