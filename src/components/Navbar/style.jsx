import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const NavbarContainer = styled.header`
    position:relative ;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:#282828;
    height:8vh;
    width:100% ;

    .aberto{
        height:20vh;

    }
    .fechado{
        height:0vh;
    }

    img {
        margin-left: 50px;
        outline:none;
    }

    nav{
        display:flex;
        justify-content:space-between;
        margin-right: 50px;
        width: 40vw;
        max-width:600px;
    }

    nav a, nav p {
        cursor: pointer;
        text-decoration:none ;
        font-size:16px;
        font-weight:bold ;
        color: #ffff;
    }
`

export const DropDownMenu = styled.div`
    background-color:#282828;
    transition:.6s all ease;
    position:absolute;
    display:flex ;
    align-items:center;
    flex-direction:column ;
    top:8vh;
    right:0;
    width:150px;
    z-index:0;
    overflow:hidden;

     a {
        text-align:center ;
        padding:5px 0;
        border-bottom:1px solid #ffff;
        width:80%;
    }
`