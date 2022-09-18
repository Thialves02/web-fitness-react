import { Form, Formik } from 'formik'
import React, { useContext } from 'react'
import * as yup from 'yup'
import { Api } from '../../api/Api'
import Button from '../../components/Button/Button'
import Input from '../../components/Inputs/Input'
import { ContainerUsuario } from '../Cadastro/style'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../context/CtxApp'

export default function Login(history) {
    const { setJwt, setId } = useContext(Context)
    let navigate = useNavigate()

    const logaUsuario = async (formValues) => {
        const response = await Api.post('login', formValues)
        const body = await response.json()

        if (body.token) {
            setJwt(body.token)
            setId(body._id)
            navigate('/')
        } else {
            alert(body)
        }
    }

    const validacaoLogin = yup.object().shape({
        email: yup.string().email("Não é um email").required("O email é obrigatório"),
        senha: yup.string().required("A senha é obrigatória")
    })

    return (
        <ContainerUsuario>
            <Formik
                initialValues={{
                    email: '',
                    senha: '',
                }}
                onSubmit={logaUsuario}
                validationSchema={validacaoLogin}
            >
                <Form>
                    <h1>Login</h1>
                    <Input
                        label='Email'
                        name='email'
                    />
                    <Input
                        label='Senha'
                        name='senha'
                    />
                    <Link to='/cadastro'>Não possuo conta</Link>
                    <Button
                        type='submit'
                        name='entrar'
                        label='Entrar'
                    />
                </Form>
            </Formik>
        </ContainerUsuario>
    )
}
