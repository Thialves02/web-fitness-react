import styled from "styled-components"

export const Macros = styled.div`
    display:flex;
    flex-direction:column;
    color:#ffff ;
    margin:15px 0 ;
`

export const MacrosTotais = styled.div`
    position: relative;
    background-color:#867D7D;
    border-radius:10px ;
    height:15px;
    width:250px;
    
    div.carbo{
        background-color:#1A9B27
    }
    div.prot{
        background-color:#9B1A1A
    }
    div.gord{
        background-color:#C9CC1F
    }
`

export const MacrosQntd = styled.div`
    position:absolute ;
    top:0 ;
    left:0 ;
    height:15px;
    width:${(props) => props.qntd}px;
    max-width:250px;
    background-color:#9a1919;
    border-radius:10px ;
    height:15px;
    
`

export const MacrosLabel = styled.div`
    display:flex ;
    justify-content:space-between ;
    width:250px ;
`