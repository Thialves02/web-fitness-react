import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const AlimentoContainer = styled.div`
    font-family: 'Iceberg', sans-serif;
    color: #fff;
    margin:15px 0 ;
    border-bottom: 1px solid white;
    padding-bottom: 10px;

    ${media('tablet')}{
        font-size:13px ;
    }

    ${media('mobile')}{
        font-size:12px ;
    }
`

export const AlimentoInfo = styled.div`
   display:flex;
   align-items: center;
   justify-content:space-between ;
   margin:5px 0 ;
`

export const MacrosContainer = styled.div`
   display:flex;
   width:70%;
   max-width:350px;
   justify-content:space-between ;

    ${media('mobile')}{
        width:85%
    }
`