import React from 'react'
import { InputContainer } from './style'
import { ErrorMessage, Field } from 'formik'

export default function Input({ label, name, placeholder, maxLength }) {
    return (
        <InputContainer>
            <label>{label}</label>
            <Field type="text" name={name} placeholder={placeholder} maxLength={maxLength} />
            <ErrorMessage
                component="span"
                name={name}
            />
        </InputContainer>
    )
}
