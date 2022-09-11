import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { SelectContainer } from './style'

export default function Select({ label, name, values, options }) {
    return (
        <SelectContainer>
            <label>{label}</label>
            <Field as="select" name={name}>
                <option value="" disabled>Selecione...</option>
                {options.map((genero, index) =>
                    <option value={values[index]} key={index}>{genero}</option>
                )}
            </Field>
            <ErrorMessage
                component="span"
                name={name}
            />
        </SelectContainer>
    )
}
