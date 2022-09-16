import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const MinhasMetas = styled.section`
    display:flex ;
    flex-direction:column;
    justify-content :center;
    align-items :center;
    padding:150px 0 50px;
    background-color:#282828;

    ${media('mobile')}{
        padding:50px 0;
    }
`

export const MetasContainer = styled.div`
    display:flex ;
    justify-content :space-between;
    align-items :center;
    width:70vw;
    max-width:900px;
    margin:50px 0 ;

    ${media('tablet')}{
        display:flex;
        flex-direction:column;
        justify-content :center;
    }
`

export const MetasMacros = styled.div`
    display:block ;

    ${media('tablet')}{
        margin-top:40px ;
    }
    
`

export const Refeicoes = styled.div`
    padding-top:50px ;
    background-color:#1A1A1A ;
    display:flex ;
    flex-direction:column;
    align-items:center;
    width:100%;
    
`

