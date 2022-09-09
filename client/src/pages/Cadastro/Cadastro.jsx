import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

export default function Cadastro() {

    const handleClickLogin = (e) => {
        console.log(e)
    }

    const handleClickCadastro = (e) => {
        console.log(e)
    }

    const validacaoLogin = yup.object().shape({
        email: yup.string().email("Não é um email").required("O email é obrigatório"),
        senha: yup.string().min(5, "A senha deve ter 5 caracteres").required("A senha é obrigatória")
    })

    const validacaoCadastro = yup.object().shape({
        email: yup.string().email("Não é um email").required("O email é obrigatório"),
        senha: yup.string().min(5, "A senha deve ter 5 caracteres").required("A senha é obrigatória"),
        confirmaSenha: yup.string().oneOf([yup.ref("senha"), null], "As senhas não são iguais")
    })

    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    email: '',
                    senha: '',
                }}
                onSubmit={handleClickLogin}
                validationSchema={validacaoLogin}
            >
                <Form>
                    <Field name="email" placeholder="Email" />
                    <ErrorMessage
                        component="span"
                        name="email"
                    />
                    <Field name="senha" placeholder="Senha" />
                    <ErrorMessage
                        component="span"
                        name="senha"
                    />
                    <button type="submit">Entrar</button>
                </Form>
            </Formik>

            <h1>Cadastro</h1>
            <Formik
                initialValues={{
                    email: '',
                    senha: '',
                    confirmaSenha: ''
                }}
                onSubmit={handleClickCadastro}
                validationSchema={validacaoCadastro}
            >
                <Form>
                    <Field name="email" placeholder="Email" />
                    <ErrorMessage
                        component="span"
                        name="email"
                    />
                    <Field name="senha" placeholder="Senha" />
                    <ErrorMessage
                        component="span"
                        name="senha"
                    />
                    <Field name="confirmaSenha" placeholder="Confirmação de senha" />
                    <ErrorMessage
                        component="span"
                        name="confirmaSenha"
                    />
                    <button type="submit">Entrar</button>
                </Form>
            </Formik>
        </div>
    )
}
