import React from "react";

// title:"POst1",
// date: "junho 8 2022",
// autor:"Rodolfo silva",
// image:"https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg",
// category:"category1"
import {ContainerCard} from "../style/styled"
const Card = ({post})=>{
 const {image,title,category,date} = post
    return (
        <ContainerCard>
            <img src={image} alt={`imagem-post-${title}`}/>
                <h2>{title}</h2>
            <div>
                <p>{category}</p>
                <p>{date}</p>
            </div>
        </ContainerCard>
    )
}
export default Card