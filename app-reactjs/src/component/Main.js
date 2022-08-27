import React, { useState } from "react";
import {ContainerMain} from "../style/styled"
import Card from "./Card";


const Main = ()=>{
    const resp =[
          
        {
            title:"POst3",
            date: "junho 8 2022",
            autor:"Rodolfo silva",
            image:"https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg",
            category:"category2"
        },
        {
            title:"POst3",
            date: "junho 8 2022",
            autor:"Rodolfo silva",
            image:"https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg",
            category:"category1"
        },
        {
            title:"POst4",
            date: "junho 8 2022",
            autor:"Rodolfo silva",
            image:"https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg",
            category:"category1"
        },
        {
            title:"POst45",
            date: "junho 8 2022",
            autor:"Rodolfo silva",
            image:"https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg",
            category:"category1"
        },
        {
            title:"POst44",
            date: "junho 8 2022",
            autor:"Rodolfo silva",
            image:"https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg",
            category:"category1"
        },
        {
            title:"POst55",
            date: "junho 8 2022",
            autor:"Rodolfo silva",
            image:"https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg",
            category:"category1"
        },
        {
            title:"POst45",
            date: "junho 8 2022",
            autor:"Rodolfo silva",
            image:"https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg",
            category:"category1"
        }
    ]
    
   const [category, setCategory] = useState("")
    const filtro = resp.filter((post)=>(
        post.category === category
       ))
   return(
        <ContainerMain>
            <div>
            <h2>Browser The Category</h2>
           <ul>
                <li
                onClick={()=>setCategory("category1")}
                >Category 1</li> 
                <li
                onClick={()=>setCategory("category2")}
                >Category 2</li> 
                <li
                onClick={()=>setCategory("category3")}
                >Category 3</li> 
                <li
                onClick={()=>setCategory("category4")}
                >Category 4</li> 
           </ul>
           </div>
           <div>
            <ul>

            {
            category.length?
            filtro.map((post)=>(
                <Card key={post.title} post={post}/>))
            
           : resp.map((post)=>(
                      <Card key={post.title} post={post}/>))
           }
            </ul>
                
            </div> 
        </ContainerMain>
    )
}

export default Main