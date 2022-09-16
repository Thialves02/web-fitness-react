import React from 'react'
import { Formik, Form, } from 'formik'
import * as yup from 'yup'
import { Api } from '../../api/Api'
import { ContainerUsuario } from './style'
import Input from '../../components/Inputs/Input'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

export default function Cadastro() {
    let navigate = useNavigate()

    //Função para cadastrar usuario
    const cadastraUsuario = async ({ email, senha, nome }) => {
        const response = await Api.post('api/users/', { 'nome': nome, 'email': email, 'senha': senha })
        const body = await response.json()

        //Caso o cadastro efetue corretamente o usuário é logado automaticamente
        if (body.createdAt) {
            const response = await Api.post('api/users/login', { 'email': email, 'senha': senha })
            const body = await response.json()

            localStorage.setItem('token', body.token);
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

    return (
        <ContainerUsuario>
            <Formik
                initialValues={{
                    email: '',
                    senha: '',
                    confirmarSenha: '',
                    nome: ''
                }}
                onSubmit={cadastraUsuario}
                validationSchema={validacaoCadastro}
            >
                <Form>
                    <h1>Cadastro</h1>
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
                        type='submit'
                        name='cadastrar'
                        label='Cadastrar'
                    />
                </Form>
            </Formik>
        </ContainerUsuario>
    )
}
