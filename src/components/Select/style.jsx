import styled from 'styled-components'

export const SelectContainer = styled.div`
    display:flex ;
    flex-direction:column;
    margin:10px 25px ;

    label {
        color: #EDEDED;
        font-weight: bold
    }

    select {
        width: 200px;
        border-radius:5px;
        height:30px;
        outline: none;
        border: none;
    }

    span {
        color:#e80000;
        font-size:13px ;
    }
`