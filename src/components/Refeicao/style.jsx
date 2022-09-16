import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const RefeicaoContainer = styled.div`
   font-family: 'Iceberg', sans-serif;
   color: #fff;
   width:70%;
   max-width:1000px;
   background-color:#282828;
   margin:20px 0;
   border-radius:10px ;
   padding:20px 20px 10px;

   div.block{
      transition:all ease 1s
   }

   div.none{
      opacity:0;
      height:0 ;
   }

   ${media('mobile')}{
        width:90%
    }
`
export const RefeicaoInfos = styled.div`
   position: relative;
   cursor: pointer;

   svg{
      position:absolute;
      top:10px;
      right:0;
      height:2.3em;
      transition:.5s ;

      ${media('tablet')}{
         top:0px;
         height:1.5em;
      }
   }

   svg.block{
      transform: rotate(180deg);
   }

   svg.none{
      transform: rotate(360deg);
   }

   
`

export const MacrosContainer = styled.div`
   display:flex;
   width:70%;
   max-width:500px;
   justify-content:space-between ;

   ${media('tablet')}{
        font-size:10px ;
        width:90%
    }

    ${media('mobile')}{
        width:100%
    }
`

export const ButtonsContainer = styled.div`
   display:flex;
   justify-content:center;
   align-items:center;

   button {
      margin: 40px 40px 5px;
   }
`