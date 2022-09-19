import styled from "styled-components"
const padding =  "6rem";
const paddingMobile="1rem" ;


export const ContainerHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 10vh;
padding: 1rem ${padding};
background-color: beige;
border-bottom: 0.3rem solid #e2e2e2;
width:100%;

img{
    cursor: pointer;
}

div ul {
    display: flex;
    gap:40px;
    
    li{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.4rem 0.8rem;
        width: 10rem;
        cursor: pointer;
        &:hover{
            background-color: #e5e5e5;
            border-radius: 0.4rem
        }
        
    }
    li:last-child{
            
            background-color:#0066cc;
            color: #e2e2e2;
            border-radius: 0.4rem;
            padding: 1rem 0.5rem;
        }
}
@media (max-width:375px) {
    background-color: yellow;
    padding: ${paddingMobile};
    position: relative;
    div ul{
        position: absolute;
        top:10vh;
        right: 0;
        ${({mobile})=>!mobile&&`
        display:none;
        `}
        flex-direction: column;
        align-items: center;
        background-color: #e5e5e5;
        width: 60vw;
        padding: 1rem 0;
       

    }
}

`
export const ContainerBanner = styled.div`

display: flex;
justify-content: space-between;
align-items: flex-end;
flex-wrap: wrap;
padding:  ${padding};

div:first-child{
    
    display: flex;
    flex-flow: column wrap;
    gap:3rem;
    h1{
            font-size: 8rem;
        }
        p{
            font-size: 2.2rem;
            padding-left: 0.5rem;
            border-left: 0.2rem solid #111111;
            word-wrap: break-word;
            width: 55rem;
        }

    div{
        display: flex;
        align-items: center;
        gap:1.2em;
        flex-wrap: wrap;

        /*Inputs/padrão do banner */        
        input{
            height: 5rem;
            border-radius: 0.4rem;
            border: none;

        }
        /*Campo*/
        input:first-child{
            width: 50rem;
            padding-left: 1rem;
        }
        /*Botão inscrever*/
        input:last-child{
            width: 12rem;
            background-color: #0066cc;
            color: #e2e2e2;
            font-weight: 700;
            font-size: 1.6rem;
            cursor:pointer;
        }
    }
}
/*Imagem banner*/
div:last-child{
    img{
        display: block;
        width: 40rem;
        margin-right: 3rem;
    }
}


@media (max-width:375px) {
    padding:  ${paddingMobile};

    div:first-child{

        h1{font-size: 3rem;} 
        p{
            max-width: 28rem;
            word-wrap: break-word;
        }      

        div{
            input{
                max-width: 20rem;
                height: 4rem;
            }
        }
    }
    div:last-child{
        img{
            display: none;
        }
    }
  
}

`

export const ContainerMain = styled.div`
padding:  ${padding};

section{
    display: flex;
    flex-direction: column;
    gap:03rem;

    ul {
        display: flex;
        flex-wrap: wrap;
        gap:2rem;
        li{
            display: block;
            text-align: center;
            background-color: #0066cc;
            color: #fff;
            width: 18rem;
            padding: 0.8rem 2rem;
            border-radius: 0.4rem;
            margin-bottom:3rem;
            cursor: pointer;
            transition: 0.4s;
            &:hover{
                background-color: #e5e5e5;
            }
        }
    }
}

div:last-child ul{
    display: flex;
    align-items: center;
    gap:12rem;
    flex-wrap: wrap;
    ;
}






@media (max-width:375px) {
    padding:  ${paddingMobile};
    align-items: center;
    
    div:first-child{
        ul {
            gap:2rem;
            justify-content: flex-start;
            
            li{
            width: 9rem;
            height: auto;
            font-size: 1rem;
            margin-bottom: 0rem;
            padding: 0.5rem;
        }
    }}
    div:last-child ul{
        margin-top: 4rem;
        justify-content: center;
        gap: 4rem;}
}



`
export const ContainerCard = styled.div`

height: 40rem;
width: 32rem;
border-radius: 1rem;
background-color: #fff;
padding: 1rem;

img{width: 30rem;
    height: 50%;
    border-radius: 0.4rem;}

h2{ margin-top:2rem ;
   font-size: 1.8rem;}

   div{margin-top: 1rem;}


@media (max-width:375px) {

    padding:  ${paddingMobile};
    height: 30rem;
    width: 22rem;
    
img{width: 20rem;
    height: 55%;
    border-radius: 0.3rem;}

    h2{margin-top:0.4rem ;
   font-size: 1.6rem;}

}
`
export const MenuMobile = styled.div`
display:none;

@media (max-width:376px) {
    display: block;
    cursor:pointer;
}

`