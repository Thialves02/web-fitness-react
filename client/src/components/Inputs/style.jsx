import styled from "styled-components"

export const InputContainer = styled.div`
    display:flex ;
    flex-direction:column;
    margin:10px 25px ;

    label {
        color: #EDEDED;
        font-weight: bold
    }

    input {
        width: 200px;
        border-radius:5px;
        height:30px;
        outline: none;
        border: none;
        padding: 10px;
    }
`