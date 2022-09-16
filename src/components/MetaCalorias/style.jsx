import styled from "styled-components"

export const MetaKcalContainer = styled.section`
    div{
        position: relative;
    }

    h2,h3{
        text-align: center;
        font-family: 'Iceberg', sans-serif;
        color: #fff;
        font-size: 22px;
    }

    h3:nth-of-type(1){
        position:absolute ;
        width:100%;
        top:130px;
        font-size:30px
    }

    svg {
        margin:15px 0 ;
    }

    .progress-ring__circle {
    transition: 0.35s stroke-dashoffset;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    stroke:#1A4598
    }
`