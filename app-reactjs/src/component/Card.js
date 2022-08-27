import React from "react";


import {ContainerCard} from "../style/styled"
const Card = ({post})=>{
 const {image,title,categories,date} = post
    return (
        <ContainerCard>
            <img src={image} alt={`imagem-post-${title}`}/>
                <h2>{title}</h2>
            <div>
                <p>{categories}</p>
                <p>{date}</p>
            </div>
        </ContainerCard>
    )
}
export default Card