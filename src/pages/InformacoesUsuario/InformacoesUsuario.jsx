import React from 'react'
import Input from '../../components/Inputs/Input'
import { InfoContainer } from './style'
import { Formik, Form, ErrorMessage } from 'formik'
import Select from '../../components/Select/Select'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'


export default function InformacoesUsuario() {
    const validacaoInputs = yup.object().shape({
        peso: yup.number().typeError("O valor deve ser um número").required("O seu peso é obrigatório"),
        altura: yup.number().typeError("O valor deve ser um número").min(3, "Insira uma altura válida").required("A altura é obrigatória"),
        idade: yup.number().typeError("O valor deve ser um número").min(2, "Insira uma idade válida").required("A idade é obrigatória"),
        generos: yup.string().required("O campo gênero é obrigatório"),
        nivelAtividade: yup.string().required("O campo nível de atividade é obrigatório"),
        objetivo: yup.string().required("O campo objetivo é obrigatório")
    })

    const navigate = useNavigate();

    const salvaInfoUsuario = (value) => {
        localStorage.setItem('infoUsuario', JSON.stringify(value))

        if (localStorage.getItem('infoUsuario')) {
            navigate('/');
        }
    }

    const valueGeneros = ['masculino', 'feminino']
    const generos = ['Masculino', 'Feminino']

    const valuesNivAtividade = ['sedentario', 'levAtivo', 'modAtivo', 'altAtivo']
    const nivAtividade = ['Sedentário', 'Levemente Ativo', 'Moderadamente Ativo', 'Altamente Ativo']

    const valueObjetivo = ['perderPeso', 'manterPeso', 'ganharPeso']
    const objetivo = ['Perder peso', 'Manter peso', 'Ganhar peso']

    return (
        <InfoContainer>
            <section>
                <h1>Seus dados</h1>
                <Formik
                    initialValues={{
                        peso: '',
                        altura: '',
                        idade: '',
                        generos: '',
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
                                placeholder="80"
                                maxLength='3'
                            />
                            <Input
                                label='Altura (cm)'
                                name='altura'
                                placeholder="185"
                                maxLength='3'
                            />
                            <Input
                                label='Idade'
                                name='idade'
                                placeholder="20"
                                maxLength='3'
                            />
                            <Select
                                label='Gêneros'
                                name='generos'
                                values={valueGeneros}
                                options={generos}
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
                                options={objetivo}
                            />
                        </div>
                        <Button
                            label='Criar Dieta'
                            name='enviarInfoPessoal'
                            type='submit'
                        />
                    </Form>
                </Formik>
            </section>
        </InfoContainer>
    )
}
