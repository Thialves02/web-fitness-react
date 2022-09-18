import React, { useContext } from 'react'
import Input from '../../components/Inputs/Input'
import { InfoContainer } from './style'
import { Formik, Form } from 'formik'
import Select from '../../components/Select/Select'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { Api } from '../../api/Api'
import { Context } from '../../context/CtxApp'


export default function InformacoesUsuario() {
    const { id, altura, genero, idade, peso, nivelAtividade, objetivo } = useContext(Context)

    const validacaoInputs = yup.object().shape({
        peso: yup.number().typeError("O valor deve ser um número").required("O seu peso é obrigatório"),
        altura: yup.number().typeError("O valor deve ser um número").min(3, "Insira uma altura válida").required("A altura é obrigatória"),
        idade: yup.number().typeError("O valor deve ser um número").min(2, "Insira uma idade válida").required("A idade é obrigatória"),
        nivelAtividade: yup.string().required("O campo nível de atividade é obrigatório"),
        objetivo: yup.string().required("O campo objetivo é obrigatório")
    })

    const navigate = useNavigate();

    const salvaInfoUsuario = async (value) => {
        console.log(value)
        const response = await Api.update('atualizar', id, value)
        const body = await response.json()

        console.log(body)

        if (body.createdAt) {
            navigate('/');
        } else {
            alert(body)
        }
    }

    const valuesNivAtividade = ['sedentario', 'levAtivo', 'modAtivo', 'altAtivo']
    const nivAtividade = ['Sedentário', 'Levemente Ativo', 'Moderadamente Ativo', 'Altamente Ativo']

    const valueObjetivo = ['perderPeso', 'manterPeso', 'ganharPeso']
    const objetivos = ['Perder peso', 'Manter peso', 'Ganhar peso']

    return (
        <InfoContainer>
            <section>
                <h1>Seus dados</h1>
                <Formik
                    initialValues={{
                        peso: '',
                        altura: '',
                        idade: '',
                        objetivo: '',
                        nivelAtividade: ''
                    }}
                    onSubmit={salvaInfoUsuario}
                    validationSchema={validacaoInputs}
                >
                    <Form>
                        <div className="container-inputs">
                            <Input
                                label='Peso (kg)'
                                name='peso'
                                placeholder={peso}
                                maxLength='3'
                            />
                            <Input
                                label='Altura (cm)'
                                name='altura'
                                placeholder={altura}
                                maxLength='3'
                            />
                            <Input
                                label='Idade'
                                name='idade'
                                placeholder={idade}
                                maxLength='3'
                            />
                            <Select
                                label='Nível de Atividade'
                                name='nivelAtividade'
                                values={valuesNivAtividade}
                                options={nivAtividade}
                            />
                            <Select
                                label='Objetivo'
                                name='objetivo'
                                values={valueObjetivo}
                                options={objetivos}
                            />
                        </div>
                        <Button
                            label='Atualizar'
                            name='enviarInfoPessoal'
                            type='submit'
                        />
                    </Form>
                </Formik>
            </section>
        </InfoContainer>
    )
}
