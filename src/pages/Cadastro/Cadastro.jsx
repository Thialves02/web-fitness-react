import React, { useContext, useEffect, useState } from 'react'
import { Formik, Form, } from 'formik'
import * as yup from 'yup'
import { Api } from '../../api/Api'
import { ContainerUsuario } from './style'
import Input from '../../components/Inputs/Input'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/CtxApp'
import Select from '../../components/Select/Select'

export default function Cadastro() {
    const { setJwt, setId } = useContext(Context)
    const [pag, setPag] = useState(0)
    const valueGeneros = ['masculino', 'feminino']
    const generos = ['Masculino', 'Feminino']

    const valuesNivAtividade = ['sedentario', 'levAtivo', 'modAtivo', 'altAtivo']
    const nivAtividade = ['Sedentário', 'Levemente Ativo', 'Moderadamente Ativo', 'Altamente Ativo']

    const valueObjetivo = ['perderPeso', 'manterPeso', 'ganharPeso']
    const objetivo = ['Perder peso', 'Manter peso', 'Ganhar peso']

    let navigate = useNavigate()

    useEffect(() => {

    }, [pag])

    //Função para cadastrar usuario
    const cadastraUsuario = async ({ email, senha, nome, genero, altura, peso, objetivo, nivelAtividade, idade }) => {
        const payload = {
            'nome': nome,
            'email': email,
            'senha': senha,
            'genero': genero,
            'altura': altura,
            'idade': idade,
            'nivelAtividade': nivelAtividade,
            'objetivo': objetivo,
            'peso': peso
        }
        console.log(payload)
        const response = await Api.post('cadastrar', payload)
        const body = await response.json()

        //Caso o cadastro efetue corretamente o usuário é logado automaticamente
        if (body.createdAt) {
            const response = await Api.post('login', { 'email': email, 'senha': senha })
            const body = await response.json()

            setJwt(body.token)
            setId(body._id)
            navigate('/')
        } else {
            alert(body)
        }
    }

    //Função para validação de todos os campos do Form de cadastro
    const validacaoCadastro = yup.object().shape({
        email: yup.string().email("Não é um email").required("O email é obrigatório"),
        senha: yup.string().required("A senha é obrigatória"),
        confirmarSenha: yup.string().oneOf([yup.ref("senha"), null], "As senhas não são iguais"),
        nome: yup.string().required("O nome é obrigatório"),
    })

    const alteraPag = () => {
        pag == 0 ? setPag(1) : setPag(0)
        console.log(pag)
    }

    return (
        <ContainerUsuario>
            <Formik
                initialValues={{
                    email: '',
                    senha: '',
                    confirmarSenha: '',
                    nome: '',
                    genero: '',
                    altura: '',
                    idade: '',
                    nivelAtividade: '',
                    objetivo: '',
                    peso: '',
                }}
                onSubmit={cadastraUsuario}
                validationSchema={validacaoCadastro}
            >
                <Form>
                    <h1>Cadastro</h1>
                    {
                        pag == 0 ? (
                            <>
                                <Input
                                    label='Nome'
                                    name='nome'
                                />
                                <Input
                                    label='Email'
                                    name='email'
                                />
                                <Input
                                    label='Senha'
                                    name='senha'
                                />
                                <Input
                                    label='Confirmar senha'
                                    name='confirmarSenha'
                                />
                                <Button
                                    type='button'
                                    name='avancar'
                                    label='Avançar'
                                    onClick={() => alteraPag()}
                                />
                                <Button
                                    type='button'
                                    name='entrar'
                                    label='Entrar'
                                    onClick={() => navigate('/login')}
                                />
                            </>
                        ) : (
                            <>
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
                                    name='genero'
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
                                <Button
                                    type='submit'
                                    name='cadastrar'
                                    label='Cadastrar'
                                />
                                <Button
                                    type='button'
                                    name='voltar'
                                    label='Voltar'
                                    onClick={() => alteraPag()}
                                />
                            </>
                        )
                    }
                </Form>
            </Formik>
        </ContainerUsuario>
    )
}
