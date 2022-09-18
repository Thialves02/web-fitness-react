import React from 'react'
import { ButtonStyled } from './style'


export default function Button({ label, name, type, data, ...rest }) {
    return (
        <ButtonStyled type={type} data-js={data} name={name} {...rest}>{label}</ButtonStyled>
    )
}
