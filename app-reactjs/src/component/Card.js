import React from "react";
import {ContainerCard} from "../style/styled"


const Card = ({post})=>{
const {id, categories,author,title} = post
    return (
        <ContainerCard>
            <h1>{title.rendered}</h1>
            <h1>{author}</h1>
            <>{id}</>
            <div>{categories[0]}</div>
        </ContainerCard>
    )
}
export default Card