import React from 'react'
import { InputContainer } from './style'
import { ErrorMessage, Field } from 'formik'

export default function Input({ label, name, placeholder, maxLength, ...rest }) {
    return (
        <InputContainer>
            <label>{label}</label>
            <Field type="text" name={name} placeholder={placeholder} maxLength={maxLength} {...rest} />
            <ErrorMessage
                component="span"
                name={name}
            />
        </InputContainer>
    )
}
