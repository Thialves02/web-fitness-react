import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const ContainerUsuario = styled.section` 
    display:flex ;
    flex-direction:column;
    justify-content :center;
    align-items :center;
    height: 92vh;

    form {
        position: relative;
        display: flex;
        justify-content:center ;
        align-items:center;
        flex-direction:column;
        padding:70px 150px;
        background-color: #282828;
        border-radius:10px;
        max-width:90% ;
    }

    h1,label,button,a{
        color: #ffff;
        font-family: 'Iceberg', sans-serif;
    }

    a {
        text-decoration:none
    }

    h1 {
        margin-bottom:50px ;
        font-size:50px;
    }

    button {
        margin-top:25px ;
    }
`