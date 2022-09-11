import styled from 'styled-components'
import { media } from '../../assets/styles/media'
import background from '../../assets/images/infoPessoalBG.svg'

export const InfoContainer = styled.main`
    display:flex ;
    justify-content : center ;
    align-items : center ;
    height:100vh;
    background-image:url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    h1 {
        font-size:30px;
        margin: 25px 0;
        color:#EDEDED ;
    }

    section {
        position:relative;
        display: flex ;
        justify-content : center;
        align-items : center;
        flex-direction: column;
        background-color:#282828;
        border-radius:10px;
        padding:50px;

        ${media('tablet')}{
            padding:10px 20px;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form span{
        color:#e80000;
        font-size:13px ;
    }

    form div.container-inputs{
        display: grid ;
        grid-template-columns: 1fr 1fr;

        ${media('tablet')}{
            display:flex;
            flex-direction: column;
        }
    }
`